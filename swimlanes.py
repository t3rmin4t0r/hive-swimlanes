import sys,os,re,math,string
from itertools import groupby
from glob import glob
import json
from getopt import getopt

JOB_HISTORY_DIR="jhist/"
QUERY_ID = None

def getJob(job):
	global JOB_HISTORY_DIR
	jhist = glob("%s/%s*.jhist" % (JOB_HISTORY_DIR, job))
	if(jhist):
		return jhist[0]
	return None

class JobHistory(object):
	def __init__(self, path):
		self.raw = [json.loads(l) for l in open(path) if l[0] != 'A'] # avro header
		timeline = [self.process(t) for t in self.raw if t["type"] != "record"]
		self.timeline = sorted([t for t in timeline if t.has_key("time")], key=lambda t:t["time"])
		times = [a["time"] for a in self.timeline]
		self.start = min(times)
		self.end = max(times)

	def process(self, t):
		data = {"type" : str(t["type"]), "task":"", "taskType" : ""}
		event = t["event"].values()[0]
		for k in event:
			if(k.rfind("Time") != -1):
				data[str(k)] = event[k]
				if(k == "startTime" or k == "finishTime"):
					data["time"] = event[k]
			if(k == "taskid"):
				data["task"] = str(event[k])
			if(k == "taskType"):
				data["taskType"] = str(event[k])
		return data

class HiveTask(object):
	def __init__(self, stage, pair):
		pair = list(pair)
		times = [a["time"] for a in pair]
		self.start = min(times)
		self.end = max(times)
		self.pair = pair
		self.stage = stage
		first = pair[::].pop()
		job = first["job"]
		self.job = job
		jhist = getJob(job)
		if(jhist):
			self.subtimings = JobHistory(jhist)
		else:	
			self.subtimings = None

	def __repr__(self):
		return '<Hive-%s %d ms from %d>' % (self.stage, self.end - self.start, self.start)
	
class HiveQuery(object):
	def __init__(self, query, pair):
		times = [a["time"] for a in pair]
		self.start = min(times)
		self.end = max(times)
		self.pair = pair
		self.query = query

	
class LogSieve(object):
	def __init__(self):
		self.query = QUERY_ID
		if(QUERY_ID):
			self.state = 0 # filter lines
		else:
			self.state = 2 # always on
	def sieve(self, g):
		if(not g): return False
		if(self.state == 0):
			if(g["type"] == "QueryStart"):
				if(g["query"] == self.query):
					self.state = 1
					return True
			elif(g["type"] == "QueryEnd"):
				if(g["query"] == self.query):
					self.state = 0
					return True
			return False
		return True

class HiveLog(object):
	patterns = [
	re.compile('(?P<type>Task[^ ]*).*TASK_NAME="(?P<name>[^"]*)".*TASK_ID="(?P<id>[^"]*)" QUERY_ID="(?P<query>[^"]*)".*? (TASK_HADOOP_ID="(?P<job>[^"]*)" )?TIME="(?P<time>[^"]*)"')
	, re.compile('(?P<type>Query[^ ]*).*QUERY_ID="(?P<query>[^"]*)".*TIME="(?P<time>[^"]*)"')
	, re.compile('(?P<type>Session[^ ]*) SESSION_ID="(?P<sid>[^"]*)" .*TIME="(?P<time>[^"]*)"')
	]

	def __init__(self, f):
		data = filter(LogSieve().sieve, [self.process(l) for l in open(f)])		
		self.timeline = sorted(data, key=lambda a:a["time"])
		self.tasks = sorted(self.grouptasks(), key=lambda t:t.start)
		self.queries = sorted(self.markqueries(), key=lambda t:t.start)
		sessions = filter(lambda a:a.has_key("sid"), self.timeline)
		if(sessions): 
			session = sessions[0]
			self.session = session["sid"]
			self.start = session["time"]
		else:
			self.start = 0
			if(self.queries): self.start = self.queries[0].start		
			self.session = "Unknown"
	
	def grouptasks(self):
		istask = lambda t: (t["type"] == "TaskStart" or t["type"] == "TaskEnd")
		tasks = [t for t in self.timeline if istask(t)]
		pairs = groupby(tasks, key=lambda t: t["id"])
		return [HiveTask(stage, pair) for stage, pair in pairs]
	
	def markqueries(self):
		isquery = lambda t: (t["type"] == "QueryStart" or t["type"] == "QueryEnd")
		queries = [t for t in self.timeline if isquery(t)]
		pairs = groupby(queries, key=lambda t: t["query"])
		return [HiveQuery(query, pair) for query, pair in pairs]
	
	def process(self, line):
		l = line.strip()
		matches = filter(lambda a: a != None, [x.match(l) for x in self.patterns])
		groups = [m.groupdict() for m in matches]
		if(groups):
			return self.convert(groups[0])
		return None
	
	def convert(self, g):
		g["time"] = int(g["time"])
		return g
	
	def __repr__(self):
		times = [a["time"] for a in self.timeline]
		return '<HiveLog("%s" of %d seconds)>' % (self.session, max(times) - min(times))
	
	def timeline(self):
		return self.timeline
	
	def swimlanes(self):
		data = []
		tasks = self.tasks
		count = len(tasks)
		timeto = lambda t: (t - self.start)/1000
		duration = lambda t1, t2: abs(t1-t2)/1000

		data.append({
			"task": 0,
			"stage": "session",
			"time": 0,
			"type": "Session",
			"label": "start"
		});

		for q in self.queries:
			data.append({
				"task": 0,
				"stage": "query",
				"time": timeto(q.start),
				"type": "QueryStart",
				"label": "query-start"
			})
			data.append({
				"task": 0,
				"stage": "query",
				"time": timeto(q.end),
				"type": "QueryEnd",
				"label": "%d s" % duration(q.start, q.end)
			})
		i = 1
		for t in tasks:
			j = i
			data.append({
				"task": i,
				"stage": t.stage,
				"time": timeto(t.start),
				"type": "task-%d" % i,
				"label": "%s" % t.stage
			})
			if(t.subtimings):
				taskset = {}
				for st in t.subtimings.timeline:					
					if((not st["task"]) or (not taskset.has_key(st["task"]))):						
						i += 1
						taskset[st["task"]] = i
						k = i
					else:
						k = taskset[st["task"]]
					data.append({
					"task": k,
					"stage": t.stage + st["task"],
					"time": timeto(st["time"]),
					"type": "%s%s" % (st["type"], st["taskType"]),
					"label": "%s (+%d)" % (st["type"], duration(t.start, st["time"]))
					})
			data.append({
				"task": i,
				"stage": t.stage,
				"time": timeto(t.end),
				"type": "task-%d" % j,
				"label": "%s s" % duration(t.end, t.start)
			})
			i += 1
		return data
	
def main(args):
	(opts, args) = getopt(args, "j:q:")
	for k,v in opts:
		if(k == "-j"):
			global JOB_HISTORY_DIR
			JOB_HISTORY_DIR = v
		if(k == "-q"):
			global QUERY_ID
			QUERY_ID = v
	logs = [HiveLog(f) for f in args]	
	for l in logs:
		print "var swimlanes = %s;" % json.dumps(l.swimlanes())
		#print "var timeline = %s;" % l.timeline

main(sys.argv[1:])

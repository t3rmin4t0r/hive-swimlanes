var swimlanes = [{'label': 'start', 'task': 0, 'type': 'Session', 'time': 0, 'stage': 'session'}, {'label': 'start', 'task': 0, 'type': 'QueryStart', 'time': 6, 'stage': 'query'}, {'label': 'end (91)', 'task': 0, 'type': 'QueryEnd', 'time': 98, 'stage': 'query'}, {'label': 'Start', 'task': 1, 'type': 'task', 'time': 6, 'stage': 'Stage-8'}, {'label': 'End (6)', 'task': 1, 'type': 'task', 'time': 12, 'stage': 'Stage-8'}, {'label': 'Start', 'task': 2, 'type': 'task', 'time': 12, 'stage': 'Stage-1'}, {'label': 'End (28)', 'task': 2, 'type': 'task', 'time': 41, 'stage': 'Stage-1'}, {'label': 'Start', 'task': 3, 'type': 'task', 'time': 41, 'stage': 'Stage-2'}, {'label': 'End (28)', 'task': 3, 'type': 'task', 'time': 70, 'stage': 'Stage-2'}, {'label': 'Start', 'task': 4, 'type': 'task', 'time': 70, 'stage': 'Stage-3'}, {'label': 'End (27)', 'task': 4, 'type': 'task', 'time': 98, 'stage': 'Stage-3'}];
var timeline = [{'sid': 'gopal_201212191639', 'type': 'SessionStart', 'time': 1355915365059}, {'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'QueryStart', 'time': 1355915371655}, {'name': 'org.apache.hadoop.hive.ql.exec.MapredLocalTask', 'job': None, 'time': 1355915371671, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskStart', 'id': 'Stage-8'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapredLocalTask', 'job': None, 'time': 1355915377922, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskEnd', 'id': 'Stage-8'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': None, 'time': 1355915377922, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskStart', 'id': 'Stage-1'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0004', 'time': 1355915390137, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-1'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0004', 'time': 1355915403103, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-1'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0004', 'time': 1355915404176, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-1'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0004', 'time': 1355915405250, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-1'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0004', 'time': 1355915406326, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-1'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0004', 'time': 1355915406349, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskEnd', 'id': 'Stage-1'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': None, 'time': 1355915406349, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskStart', 'id': 'Stage-2'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0005', 'time': 1355915422425, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-2'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0005', 'time': 1355915427766, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-2'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0005', 'time': 1355915428839, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-2'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0005', 'time': 1355915429923, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-2'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0005', 'time': 1355915431000, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-2'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0005', 'time': 1355915432071, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-2'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0005', 'time': 1355915433157, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-2'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0005', 'time': 1355915434238, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-2'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0005', 'time': 1355915435312, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-2'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0005', 'time': 1355915435340, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskEnd', 'id': 'Stage-2'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': None, 'time': 1355915435340, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskStart', 'id': 'Stage-3'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0006', 'time': 1355915451227, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-3'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0006', 'time': 1355915456639, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-3'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0006', 'time': 1355915457730, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-3'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0006', 'time': 1355915458819, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-3'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0006', 'time': 1355915459888, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-3'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0006', 'time': 1355915460954, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-3'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0006', 'time': 1355915462024, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-3'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0006', 'time': 1355915463100, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskProgress', 'id': 'Stage-3'}, {'name': 'org.apache.hadoop.hive.ql.exec.MapRedTask', 'job': 'job_1355915088681_0006', 'time': 1355915463137, 'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'TaskEnd', 'id': 'Stage-3'}, {'query': 'gopal_20121219163939_29c6336f-cfe8-4c09-821f-9c129b8eeb6c', 'type': 'QueryEnd', 'time': 1355915463138}];
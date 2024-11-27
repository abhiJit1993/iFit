from Connections import get_db as connect
from dbUtils import DBUtils


def getPlans(planId):
    db = connect()
    query =  'SELECT * FROM Plan'
    if planId:
        query =  f'{query} where Id =  {planId}'
    query =  f'{query} order by  PlanTypeId '
    print(query)
    cur = db.execute(query)
    plans = cur.fetchall()  # Returns a list of rows as dictionaries
    return {'plans': [dict(plan) for plan in plans]} 
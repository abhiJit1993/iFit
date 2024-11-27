from Repository import PlanRepository as repo


def getPlans(id):
    plans = repo.getPlans(id)
    return plans
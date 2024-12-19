from Repository import AuthRepository as repo


def validateUserCredentials(email, password):
    user = repo.validateUser(email, password)
    print('user in controller', user)
    return user
from flask import Flask, jsonify, request ,g , json, Response
from flask_cors import CORS

from Controller import PlanController as pctrl
from Controller import AuthController as authCtrl

app = Flask(__name__)


# Close the SQLite database connection after request
@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()



# Allow CORS for your frontend origin
CORS(app, resources={r"/*": {"origins": "https://reimagined-tribble-pp67x7pj9q73rxg-3000.app.github.dev"}}, supports_credentials=True)
@app.before_request
def before_request():
    print("Intercepted request:", request.method, request.path)


@app.route('/')
def home():
    print(' Request Recieved...')
    return jsonify({"message": "Base URL!"})
# ------------------------------------Plan--------------------------------

@app.route('/api/getPlans' ,methods=['POST', 'GET'])
def FetchPlans():
    print(request.args)
    planId =  request.args.get('planId') if request.args.get('planId') != "*"  else None
    
    return pctrl.getPlans(planId)

#---------------------------------------------------------XXXXXXXXX--------------
#-------------------------------Auth------------------------------
@app.route('/api/auth/login' ,methods=['POST','GET'])
def Login():
    print(request.args)
    
    userEmail = request.args.get('email')
    password = request.args.get('password') 

    print(userEmail,password)
    user =  authCtrl.validateUserCredentials(userEmail,password)
    if len(user['userDetails'])==0:
        return Response("Invalid Credentials.", 401)
    return {"data" : user['userDetails']}




if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

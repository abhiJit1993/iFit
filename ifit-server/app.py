from flask import Flask, send_from_directory , request , Response


app = Flask(__name__)


@app.route('/')
def serve_index():
    
        return 'iFit Server Up !!!'



if __name__ == '__main__':
 app.run()

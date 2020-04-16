from flask import Flask, render_template, request
from generate_password import generate_password
app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    return render_template('home.html', default_password=generate_password())

@app.route('/about', methods=['GET'])
def about():
    return render_template('about.html')

@app.route('/create-password', methods=['GET'])
def create_password():
    password_options = request.args.to_dict()
    return generate_password(**password_options)


if __name__ == '__main__':
    app.run()

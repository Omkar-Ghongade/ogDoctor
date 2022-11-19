from flask import Flask, render_template, request, url_for, redirect

app=Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chatbot', methods=['GET', 'POST'])
def index_func():
    if request.method == 'POST':
        # do stuff when the form is submitted
        # redirect to end the POST handling
        # the redirect can be to the same route or somewhere else
        return redirect(url_for('index'))
    # show the form, it wasn't submitted
    return render_template('chatbot.html',data="Enter Your Name")

@app.route('/', methods =["GET", "POST"])
def gfg():
    if request.method == "POST":
       # getting input with name = fname in HTML form
       first_name = request.form.get("chattext")
       print(first_name)
    return render_template("chatbot.html",data=first_name)

if __name__ == "__main__":
    app.run()
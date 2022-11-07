from flask import Flask, render_template
app = Flask(__name__)
​
​
@app.route("/")
@app.route("/final.html")
def home():
    return render_template("final.html")
​
@app.route("/about.html")
def about():
    return render_template("about.html")
​
@app.route("/results.html")
def results():
    return render_template("results.html")
​
@app.route("/source.html")
def source():
    return render_template("source.html")
​
if __name__ == "__main__":
    app.run()
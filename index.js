const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { response } = require('express');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var okMsg = "Thank you! Your email is submitted, you'll get a response from our team soon."
var errMsg = "Oops!, there was an error, please try later."

app.get("/", function(req, res) {
    res.render("home");
})

app.get("/contact", function(req, res) {
    res.render("contact");
})

app.get("/about", function(req, res) {
    res.render("about");
})

app.get("/newsletter", function(req, res) {
    res.render("newsletter");
})

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
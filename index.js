//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// set EJS as the viewing engine to display html
app.set("view engine", "ejs");

// use body parser to parse html file
app.use(bodyParser.urlencoded({ extended: true }));

// use Express to serve or display static files such as images, CSS, JS files etc.
app.use(express.static("public"));

// --- Static List Data ---
const personalListItems = ["Lindsay", "Trenton", "Hawaii", "USA"];
const zodiacListItems = ["Lindsay", "Trenton", "Scorpio", "Topaz"];

// --- Routes ---
// Simple Home Route (Optional - tells user where to go)
app.get("/", function (req, res) {
	res.send(
		"<h1>Welcome! Navigate to /Personal or /Zodiac to see the lists.</h1>"
	);
});

// Route for Personal List
// Renders the updated list.ejs template with personal data
app.get("/Personal", function (req, res) {
	// Provide a title and the data array to the template
	res.render("list", {
		listTitle: "Personal Information",
		newListItems: personalListItems,
	});
});

// Route for Zodiac List
// Renders the updated list.ejs template with zodiac data
app.get("/Zodiac", function (req, res) {
	// Provide a title and the data array to the template
	res.render("list", {
		listTitle: "Zodiac Information",
		newListItems: zodiacListItems,
	});
});

app.listen(3000, function () {
	console.log("Server is running on port 3000");
});

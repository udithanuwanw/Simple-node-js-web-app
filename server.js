const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Define routes
app.get("/", (req, res) => {
    res.render("index", { title: "Home Page", message: "Welcome to My Website!" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About Us", message: "This is the about page." });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

const express = require ("express");

require("dotenv").config();

const app = express();
app.use(express.static("public"));

//build the server here
app.get("/", (req, res) =>
res.sendFile(__dirname + "/views/index.html")
);

app.get("/works", (req, res) =>
res.sendFile(__dirname + "/views/works.html")
);

app.get("/about", (req, res) =>
res.sendFile(__dirname + "/views/about.html")
);

const PORT = 3000;
app.listen(PORT, () => console.log("running on port 3000"));
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://musabhassan1999:Musab12@cluster0.soooqfv.mongodb.net/HireDev');
}

const hireDevSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    subject: String,
    msg: String,
});

const Data = mongoose.model('Data', hireDevSchema);

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/about-us", (req, res) => {
    res.sendFile(__dirname + "/public/html/about-us.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/html/contact.html");
});

app.post("/contact", (req, res) => {
    const user = new Data({
        name: req.body.name,
        email: req.body.email4,
        number: req.body.phoneNum,
        subject: req.body.subject,
        msg: req.body.msg
    });
    user.save();
    res.sendFile(__dirname + "/public/html/contact.html");
});

app.get("/web-dev", (req, res) => {
    res.sendFile(__dirname + "/public/html/web-dev.html");
});

app.get("/app-dev", (req, res) => {
    res.sendFile(__dirname + "/public/html/app-dev.html");
});

app.get("/clone", (req, res) => {
    res.sendFile(__dirname + "/public/html/clone.html");
});

app.get("/game-dev", (req, res) => {
    res.sendFile(__dirname + "/public/html/game-dev.html");
});

app.get("/UXdesign", (req, res) => {
    res.sendFile(__dirname + "/public/html/UXdesign.html");
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running");
});
const express = require("express");
const cors = require("cors");
const path = require("path");

let user = {}

const port = process.env.PORT || 8000;

const app = express()

app.use(express.static(__dirname));
app.use(cors())
app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true
}))

app.listen(port)

//All routes point to "app.html" as this is the main file, which is being manipulated by the "app.js" script.
//The script renders different html sites based on the url visited.
//Each url is served by a different function in the script, injecting html-code into the boilerplate "app.html" file.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/app.html'))
})

/**
 * route for users, that are already logged in
 * app.get("/home", (req, res) => {
 *  res.sendFile(path.join(__dirname, '/app.html'))
 * })
 */

//authentication stuff -> Auth0
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '/app.html'))
})

//database stuff
//needs a sub-site, where you can upload a file -> Python process with file, saving file with firebase
app.get("/documents", (req, res) => {
    res.sendFile(path.join(__dirname, '/app.html'))
})

//authentication plus database stuff -> DB stuff with Python and firebase
app.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, '/app.html'))
})

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, '/app.html'))
})

//authentication stuff
//
//FIX:
//currently not suited for use with login form
//because the function checks for name and last name, so that
//if you login with only your email and password the function
//will return an error, as you haven't provided a name and last name
app.post("/handleform", (req, res) => {
    const name = req.body.name
    const lastname = req.body.lastname
    const password = req.body.password

    //res.send(`
    //<h1>${name}</h1>
    //<h2>${lastname}</h2>
    //<h3>${password}</h3>
    //`)
    user["Vorname"] = name;
    user["Nachname"] = lastname;
    user["Passwort"] = password;

    console.log(user)

    if(name && lastname && password){
        res.send(`
            <div>
                <h1>Hallo ${name} ${lastname}</h1>
                <p>Dein Passwort ist: ${password}</p>
            </div
        `)
    } else {
        let err_msg = ``
        if(!name){
            err_msg = `<h1>No name provided! <a href="/signup">Go back</a></h1>`
        } else if(!lastname) {
            err_msg = `<h1>No last name provided! <a href="/signup">Go back</a></h1>`
        } else {
            err_msg = `<h1>Please set password! <a href="/signup">Go back</a></h1>`
        }
        res.send(`
            <div>
                <h1>Wrong input</h1>
            </div>
            ${err_msg}
        `)
    }
})

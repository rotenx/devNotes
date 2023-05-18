const express = require("express");
const app = express();
const randtoken = require('rand-token');
app.use(express.json());
require("./db/conn");
const User = require('./models/user')
const Note = require('./models/note')
const port = 8000;



app.post("/user", (req, res) => {
    var token = randtoken.generate(64);
    try {
        const user = new User({ email: req.body.email, name: req.body.name, password: req.body.password, token: token });
        user.save().then(() => {
            res.status(201)
            const send = { token: token, message: "created account",status:true }
            res.json(send)
        }).catch((err) => {
            console.log(err);
            res.status(400).send(err)
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/login", async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (user.password == req.body.password) {
                res.status(201)
                const send = { token: user.userToken, message: "login account",status:true }
                res.json(send)
            } else {
                res.status(401).send("password or email is wrong")
            }
        } else {
            res.status(400).send("email not found create account")

        }
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/create-notes", async (req, res) => {
    try {
        const user = await User.findOne({ token: req.body.userToken });

        if (user) {
            const Notes = new Note(req.body);

            Notes.save().then(() => {
                res.status(201).send("created")
            }).catch((err) => {
                console.log(err);
                res.status(400).send(err)
            })
        } else {
            res.status(400).send("login not found")

        }



    } catch (error) {
        res.status(500).send(error)
    }
})
app.listen(port, () => {
    console.log("listing on 8000");
})
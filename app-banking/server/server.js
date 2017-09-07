require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , session = require('express-session');
    


const app = express();


app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));


massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
})







let PORT = 3032
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
require("dotenv").config();
const session = require('express-session')
const express = require('express');
const app = express();
const massive = require('massive')

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;



app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('DB SET!')
    console.log(db.listTables())
})

app.get('/api/houses', (req, res) => {
    req.app.get('db')
    .getALLHouses()
    .then((houses) => {
        res.send(houses)
    })
})

app.post('/api/houses', (req, res) => {
    const { name, address, city, state, zipcode } = req.body
    req.app.get('db')
    .createHouse([ name, address, cite, state, zipcode ])
    .then(() => {
        res.status(200).send('all good! created.')
    })

})

app.delete('/api/houses', (req, res) => {
    const { id } = req.params
    req.app.get('db')
    .deleteHouse(id)
    .then(() => {
        res.status(200).send('all good. deleted.')
    })
})


app.listen(SERVER_PORT, () => {
    console.log(`magic is happening on ${SERVER_PORT}`)
})
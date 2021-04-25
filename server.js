// run npm i express --save
// run npm i nodemon --save -dev

const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const knext = require('knext')
const handleRegister = require('./controllers/handleRegister')
const handleSignin = require('./controllers/handleSignin')
const handleProfileGet = require('./controllers/handleProfileGet')
const handleImage = require('./controllers/handleImage')



const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'Ronel',
        password: '',
        database: 'smart-brain'
    }
})

db.select('*').from('users').then(data => {
    console.log(data)
})

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {res.send(database.users)})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })

app.put('/image', (req, res) => { Image.handleImage(req, res, db) })

app.put('/imageurl', (req, res) => { Image.handleApiCall(req, res) })

app.listen(3001, () => {
    console.log('app is running on port 3001')
})

const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const creds = require('./config')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
const router = express.Router()
const url = "http://localhost:3001/send"

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', router)

const transport = {
    service: 'Outlook365',
    host: 'smtp.office365.com',
    port: '587',
    auth: {
        user: creds.user,
        pass: creds.pass
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Server is ready to take messages')
    }
})

app.post('/', (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
    var content = `Absender: ${name} \nE-Mail des Absenders: ${email} \nBetreff: \n${subject} \nNachricht: \n${message}`
    console.log(req.body)

    var mail = {
        from: creds.email,
        to: creds.recev,
        subject: `Neue Kontaktanfrage über das Kontaktformular`,
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            require.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

app.use(express.static(path.resolve(__dirname, './client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.get('/send', (req,res) => {
    res.sendFile(path.resolve(__dirname, '.client/build', 'index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`))
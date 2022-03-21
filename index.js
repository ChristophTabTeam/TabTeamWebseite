const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const creds = require('./config')

const app = express()
const router = express.Router()

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

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
    var content= `Absender: ${name} \n E-Mail: ${email} \n Betreff: ${subject} \n Nachricht: ${message}`

    var mail = {
        from: name,
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

app.use(cors())
app.use(express.json())
app.use('/', router)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`))
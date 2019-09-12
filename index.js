const cron = require("node-cron")
const express = require("express")
const nodemailer = require("nodemailer")
const {SENDER_EMAIL} = process.env
const {SENDER_PASS} = process.env

app = express()

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASS
    }
})

let mailOptions = {
    from: SENDER_EMAIL,
    to: "youremail@gmail.com, youremail+2@gmail.com",
    cc: "youremail+cc@gmail.com",
    subject: "Uszanowanie od Janosika",
    html: `<h1>Welcome</h1>
           <p>Treść emaila</p>
           <p>Dalsza część</p>`
}

cron.schedule("*/1 * * * *", () => {
    console.log("Running Cron Job " + new Date())
    sendEmail()
})

sendEmail = () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            throw error
        } else {
            console.log(`
            Email successfully sent at ${new Date()}
            Info: ${info.response}
            `)
        }
    })
}

app.listen("3128")

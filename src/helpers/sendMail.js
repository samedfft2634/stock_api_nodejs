"use strict"
/* __________________ Mail Sender __________________ */
const nodemailer = require('nodemailer')

module.exports = function(to, subject, message) {

    return null; // this service for real time application !

    //? GoogleMail (gmail):
    const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "samedfft@gmail.com",
			pass: "ihof qizt bxdc sshw",
		},
	});

    transporter.sendMail({
        to: to,
        subject: subject, 
        text: message, 
        html: message, 

    }, (error, success) => {
        error ? console.log('error:', error) : console.log('success:', success)
    })
}
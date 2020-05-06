const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    to: 'agarwalsanj24@gmail.com',
    from: 'vrindagupta07@gmail.com',
    subject: 'This is my first mail',
    text: 'I hope you get this mail'
})

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vrindagupta07@gmail.com',
        subject: 'Welcometo Task Manager App!',
        text: `Welcome to the app, ${name}. Let me know how you get along the app.`
    })
}

const sendGoodByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vrindagupta07@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Good Bye ${name}! \n Is there anything we could have done to keep you onboard.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}
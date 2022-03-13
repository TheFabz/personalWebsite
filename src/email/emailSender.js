const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

let sendMessage = (msg) => { 
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent to: ', msg.to);
    })
    .catch((error) => {
        console.error(error);
    })
}

exports.sendMessage = sendMessage;
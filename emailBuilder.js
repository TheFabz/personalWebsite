'use strict';

let messageBuilder = (destinationEmail, subject, htmlMessage) => {
    const msg = {
        to: destinationEmail, // Change to your recipient
        from: 'ffrr.rodrigues@gmail.com', // Change to your verified sender
        subject: subject,
        html: '<strong>' + htmlMessage + '</strong>',
      }
      return msg;
}

let confirmationMessageBuilder = (destinationEmail) => {
    const confirmationMessage = {
        to: destinationEmail, // Change to your recipient
        from: 'ffrr.rodrigues@gmail.com', // Change to your verified sender
        subject: 'Fabio Rodrigues - Software Engineer - Message confirmation: DO NOT REPLY',
        html: '<strong>I have received your email and will get back in touch with you shortly!</strong>',
      }
      return confirmationMessage;
}

exports.messageBuilder = messageBuilder;
exports.confirmationMessageBuilder = confirmationMessageBuilder;

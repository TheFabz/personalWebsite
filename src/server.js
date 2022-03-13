const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const emailSender = require('./email/emailSender');
const emailBuilder = require('./email/emailBuilder');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname+'/'));

app.post('/message', (req, res, next) => {
  let reqData = req.body;
  let message = emailBuilder.messageBuilder(reqData.userEmail,reqData.subject,reqData.message);
  let confirmationMessage = emailBuilder.confirmationMessageBuilder(reqData.userEmail);

  emailSender.sendMessage(message);
  emailSender.sendMessage(confirmationMessage);
  res.redirect('/')
});

//local use
// app.listen(3004, function () {
//   console.log('listening on 3004')
// })

// for use in cloud 
app.listen(process.env.PORT, function () {
  console.log('listening.......................')
})


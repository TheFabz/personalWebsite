const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// for use in cloud 
app.listen(process.env.PORT, function () {
  console.log('listening.......................')
})

/*  
//local use
app.listen(3003, function () {
  console.log('listening on 3003')
})
*/

//start page, loads log-in screen;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})


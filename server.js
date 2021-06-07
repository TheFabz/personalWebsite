const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(__dirname+'/'));


// for use in cloud 
app.listen(process.env.PORT, function () {
  console.log('listening.......................')
})


/* 
//local use
app.listen(3004, function () {
  console.log('listening on 3004')
})
*/

//start page, loads log-in screen;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})


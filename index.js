var http = require('http');
var fs = require('fs')
var express = require('express')
const bodyparser = require('body-parser')
var app = express();
const collegeRouter = require("./routes/collegeRoute")
// const { join } = require('path');
// import myObj from './myFile.js';
// console.log(myObj);
var importedData = require('./myFile.js')
app.use(bodyparser.json())
const port = 3000


// create a server object:
// http.createServer(function (req, res) {
//   res.write(JSON.stringify(importedData.myObj)); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

// http.createServer(function (req, res) {
//   fs.readFile('test.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//      res.end();
//   });
// }).listen(8080);
app.use('/app/v1/college',collegeRouter)

app.get('/', (req, res) => {
  res.json(importedData.myObj)

})
app.get('/createFile', (req, res) => {
  fs.appendFile("newFile.txt", "this is my text1", (err) => {
    if (err) {
      console.log("error in writing file");

    } else {
      console.log("created..");
      res.json("file created..")
    }
  })
})

app.listen(port, () => {
  console.log(`Aapp listening on port ${port}`)
})
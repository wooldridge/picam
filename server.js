const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('captures'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
  res.send('<h1>Main page</h1>'); 
  console.log("Sent!");
})

app.get('/list', (req, res, next) => {
  fs.readdir('./captures', (err, files) => {
    console.log(files);
    let result = '';
    files.forEach(file => {
      result += result + ' ' + file;
    });
    res.send('<p>' + result + '</p>'); 
  });
})

app.get('/sorted', (req, res, next) => {
  fs.readdir('./captures', function(err, files){
    files = files.map(function (fileName) {
      return {
        name: fileName,
        time: fs.statSync('./captures' + '/' + fileName).mtime.getTime()
      };
    })
    .sort(function (a, b) {
      return b.time - a.time; })
    .map(function (v) {
      return v.name; });
    let result = files.map(f => {
      return '<a href="http://192.168.4.117:3000/' + f + '">' + f + '</a><br/>';
    })
    result = result.join('');
    res.send('<p>' + result + '</p>'); 
  }); 
})

app.get('/latest', (req, res, next) => {
  fs.readdir('./captures', function(err, files){
    files = files.map(function (fileName) {
      return {
        name: fileName,
        time: fs.statSync('./captures' + '/' + fileName).mtime.getTime()
      };
    })
    .sort(function (a, b) {
      return b.time - a.time; })
    .map(function (v) {
      return v.name; });
    let result = 'http://192.168.4.117:3000/' + files[0];
    res.redirect(result); 
  }); 
})


app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
})

app.listen(3000);

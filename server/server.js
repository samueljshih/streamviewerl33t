const express = require('express');
const parser = require('body-parser');
const app = express();
// const sql = require('../db/databaseReqHandler.js');

app.set('port', 3000);

app.use(express.static('public'));
app.use(parser.json());

app.get('/', (request, response) => {
  console.log('GET!');
  response.end();
});

app.post('/', (request, response) => {
  //   sql.insertUser('Sam').then(result => {
  //     sql.getUsers().then(result => {
  //       console.log(result);
  //       response.end();
  //     });
  //   });
});

app.listen(app.get('port'));
console.log('listening on port 3000....');

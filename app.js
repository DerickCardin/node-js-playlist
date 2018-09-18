var express = require('express');
var todoController = require('./controllers/todocontroller.js');


var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(8080);
console.log('you are listening to the port');


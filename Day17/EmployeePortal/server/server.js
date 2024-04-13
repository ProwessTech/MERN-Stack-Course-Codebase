const express = require('express'),
path = require('path') , 
bodyParser = require('body-parser');

const cors = require('cors'),
mongoose = require('mongoose');

// Express
// Path
// BodyParser
// CORS
// Mongoose

const app = express();

var mongoDBConnection = 'mongodb+srv://esecuser:%40sec123@clusteresec.cyabfap.mongodb.net/employees';

mongoose.Promise = global.Promise;

mongoose.connect(mongoDBConnection).then(
    () => {console.log('Connected!')},
    err => {console.log('Error Occurred while connecting to Database' +err)}
);

const employeeRoute = require('../Routes/Employee.route');


app.use(cors());

const port = process.env.PORT || 4000;

app.use('/employees', employeeRoute);


const server = app.listen (port, function(){
console.log('Server is listening to port number '+ port);
} );




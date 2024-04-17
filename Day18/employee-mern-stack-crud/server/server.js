const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose');

// MongoDB database url
let mongoDatabase = 'mongodb+srv://esecuser:%40sec123@clusteresec.cyabfap.mongodb.net/employees';

// express server
const app = express();
mongoose.Promise = global.Promise;// to make mongoose available in the global scope

// connect mongoDB database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
  () => { console.log('Database connected') },
  err => { console.log(`Oops a problem occured connecting to the database \n\n ${err}`) }
);

// import all express routes
const employeeRoutes = require('../Routes/Employee.route');

// convert all incoming data to json format
app.use(bodyParser.json());

// enable cors - Cross-origin resource sharing
app.use(cors());

// setup port number
const port = process.env.PORT || 4000;

// Routes config
app.use('/employees', employeeRoutes);

// start server ===const sever = 
app.listen(port, () => console.log(`server listening at port ${port}`))
const express = require('express');

// using express and routes
const app = express();
const router = express.Router();

// import employee model
let employeeModel = require('../Model/Employee');



// http://localhost:4000/
// To get list of all employees
router.get('/', (req, res) => {
  employeeModel.find((err, employee) => {
    if (err) {
      return console.log(err);
    }
    else {
      return res.json(employee);
    }
  })
})


// http://localhost:4000/add
// Add New Employee
router.post('/add', (req, res) => {
  let employee = new employeeModel(req.body);
  employee.save()
    .then(game => {
      res.status(200).json({ 'employee': 'Employee added successfully' });
    })
    .catch(err => {
      res.status(400).json({ message: 'Oops something went wrong' });
    });
});


// http://localhost:4000/661e5e9c2b7cfd94f4784a1b
// Get employee details by ID
router.get('/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  employeeModel.findById(id, (err, employee) => {
    res.json(employee);
  });
});


 // http://localhost:4000/661e5e9c2b7cfd94f4784a1b?firstName=abc?lastName=def?email=123
// Update employee details
router.post('/:id', (req, res, next) => {
  employeeModel.findById(req.params.id, (err, employee) => {
    if (!employee) {
      return next(new Error('Unable to find employee with this Id'));
    }
    else {
      employee.firstName = req.body.firstName;
      employee.lastName = req.body.lastName;
      employee.email = req.body.email;
      employee.phone = req.body.phone;

      employee.save().then(emp => {
        res.json({ message: 'Employee Updated successfully' });
      })
        .catch(err => {
          res.status(400).send('Unable to update employee');
        });
    }
  });
});

// To Delete employee
router.delete('/:id', (req, res) => {
  employeeModel.findByIdAndDelete({ _id: req.params.id }, (err, employee) => {
    if (err) res.json(err);
    else res.json({ message: "Employee Deleted Successfully" });
  });
});

module.exports = router;
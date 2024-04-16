const express = require('express');



const app = express();

const employeeRoute = express.Router();

let employeeModel = require('../Model/Employee');


employeeRoute.route('/').get(function(req, res){

    employeeModel.find( function (err, employee){
        if(err){
            console.log(err);
        }
        else{
          console.log(employee);
          res.json(employee);  
        }
    });

});

employeeRoute.route('/addEmployee').post(function(req,res){
    let employee = new employeeModel(req.body);

    employee.save()
    .then(success => {
        res.status(200).json({'employee': 'Employee Information Added Successfully'});
    })
    .catch(err => {
        res.status(400).send("Error Occurred");
    });
});


employeeRoute.route('/editEmployee/:id').post(function(req,res){

    let id = req.params.id;

    employeeModel.findById(id, function(req,res){
        if (!employee){
            return next(new Error('Employee not found'));
        }
        else
        {
            employee.firstName = req.body.firstName;
            employee.lastName = req.body.lastName;
            employee.email = req.body.email;
            employee.phoneNo = req.body.phoneNo;


            employee.save().then(emp => {
                res.json("Employee Data Updated Successfully");
            })
            .catch(error => {
                res.status(400).send("Update Data failed");
            })

        }
    })
})

employeeModel.route('/deleteEmployee/:id').get(function (req,res){
    employeeModel.findByIdAndDelete({_id: req.params.id}, function(err, employee){
        if (error){
            console.log("Error Occurred "+error);
            res.json(error);
        }
        else {
            res.json("Employee Info Deleted Successfully");
        }
    })
})







module.exports = employeeRoute;

require('../models/db')
var mongoose = require('mongoose');
var employee = require('../models/employee');

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.getEmployees = function (req, res) {

    employee.find({}).exec(function (err, data) {
        if (err) {
            console.log(err);
            res.send("Ooops", err);
        } else {
            console.log(data);
        }
        //console.log(resp);
        sendJsonResponse(res, 200, data);
    });
};

module.exports.addEmployee = function (req, res) {
    console.log("IN POST:", req.body);
    var newEmployee = new employee(req.body);
    var nowTime = Date.now();
    var diffTime = nowTime - newEmployee.date.getTime();
    var age = new Date(diffTime);
    newEmployee.age = Math.abs(age.getUTCFullYear() - 1970);

    console.log("New Employee: ", newEmployee);

    newEmployee.save(function (err, data) {
        if (err) {
            console.log(err);
            res.message(err);
            sendJsonResponse(res, 500, "ERROR");
        } else {
            console.log(data);
        }
        //console.log(resp);
    });
    sendJsonResponse(res, 200, "OK");
};

module.exports.removeEmployee = function (req, res) {
    
    console.log("PARAMS ",req.query.email);
    employee.findOneAndRemove({email:req.query.email}, function(err,done){
        if(err){
            console.log(err);
            res.message(err);
            sendJsonResponse(res, 500, "ERROR");
        }
        else{
            sendJsonResponse(res, 200, "OK");
        }
    })
    
};
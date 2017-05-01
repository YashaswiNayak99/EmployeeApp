
require('../models/db')
var mongoose = require('mongoose');
var employee = require('../models/employee');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};

module.exports.getEmployees = function(req,res){
    
  employee.find({}).exec(function(err,data){
    if(err){
        console.log(err);
     res.send("Ooops",err);
    }
    else{
      console.log(data);
    }
  console.log(resp);
  sendJsonResponse(res,200,data);
});
};

module.exports.addEmployee = function(req,res){
  console.log(req.body);
//  employee.find({}).exec(function(err,data){
//    if(err){
//        console.log(err);
//     res.send("Ooops",err);
//    }
//    else{
//      console.log(data);
//    }
//  console.log(resp);
//  sendJsonResponse(res,200,data);
//});
    sendJsonResponse(res,200,"OK");
};
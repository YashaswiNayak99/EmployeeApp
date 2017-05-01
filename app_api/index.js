var express = require('express');
var router = express.Router();
var ctrlEmployee = require('./controllers/employeeData');

router.get('/employee', ctrlEmployee.getEmployees);
router.post('/employee', ctrlEmployee.addEmployee);
module.exports = router;
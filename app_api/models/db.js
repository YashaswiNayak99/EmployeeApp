var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost:27017/employeedb';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to: '+dbURI);
});

mongoose.connection.on('error', function(err){
  console.log('Mongoose connection error: '+err);
});

mongoose.connection.on('disconnected', function(){
  console.log('Mongoose disconnected from: '+dbURI);
});

gracefulShutdown = function(msg, callback){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through '+msg);
    callback();
  });
};

//Nodemon Style
process.once('SIGUSR2', function(){
  gracefulShutdown('nodemon restart', function(){
    process.kill(process.pid, 'SIGUSR2');
  });
});

//App termination
process.on('SIGINT', function(){
  gracefulShutdown('app termination', function(){
    process.exit(0);
  });
});

require('./employee');
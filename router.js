var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var courseRouter = require('./modules/courses/router');


module.exports=function(app){
    
app.use('/', indexRouter); 
app.use('/users', usersRouter);
app.use('/courses', courseRouter);
};
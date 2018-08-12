var CourseRepository = require('../../repositories/courseRepository');
var courseRepo = new CourseRepository(); 

module.exports = function(){
    return{
        index:(req, res)=>{
            courseRepo.getAll(function(results) {
                res.render('courses/index',{
                  courses:results
                });
              });
        },
        json:(req, res)=>{
            courseRepo.getAll(function(results){
                res.send(results);
            });
        },
        add:(req, res)=>{
            res.render(colleges/add);
        }

    };
};
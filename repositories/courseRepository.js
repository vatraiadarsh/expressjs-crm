var Database = require("../utils/Database.js");
var database = new Database();

module.exports=function(){

    return{
        getAll:function(callback){
            database.connect();
            database.query("select * from courses",function(results){
                return callback(results);
            });
        }
    }
};
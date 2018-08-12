var mysql = require('mysql');

module.exports=function(){
    return{
        db:null,
        connect:function(){
            this.db = mysql.createConnection({
                host:"localhost",
                user:"root",
                password:"",
                database:"driving_institute"
            });
        },
        query:function(sql,callback){
            this.db.query(sql,(err,result)=>{
                return callback(result);
            });
        }
    };

}

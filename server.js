const mysql = require('mysql');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];
var connection = mysql.createConnection(config);

connection.connect(()=>console.log("created connetion"));

var query = connection.query("select * from customers",function(err,result){
    console.log(query);
    if (err){
        return console.log(err);
    }
    console.log(result);  
});
let customer = {
    id: "6",
    name: 'User',
    address: 'add of the user'
};
query = connection.query("insert into customers set ?", customer, (err, result) => {
    if (err){

        return console.log(err);
    }else{
        if (result.affectedRows == 1){
            console.log("Data Inserted successfully");
        }else
            console.log("Affected rows: " + result.affectedRows);
    }
});



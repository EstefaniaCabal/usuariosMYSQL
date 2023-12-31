var Sequelize = require("sequelize");
var usuarioModelo= require("./modelos/usuarios");

require("dotenv").config();

var db = process.env.DB_MYSQL;
var usuario = process.env.USUARIO_MYSQL;
var password = process.env.PASSWORD_MYSQL;
var host = process.env.HOST_MYSQL;
var port = process.env.PORT_MYSQL;

var conexion=new Sequelize(db, usuario, password, {
    host:host,
    port:port, 
    dialect: 'mysql',
    dialectOptions:{
        ssl:{
            rejectUnathorized:true
        }
    },
    define:{
        timestamps:false
    }
});

var Usuario = usuarioModelo(conexion);

conexion.sync({force:false})
.then(()=>{
    console.log("Conectado a MYSQL");
})
.catch((err)=>{
    console.log("Error al conectarse a MYSQL" +err);



});

// var Usuario = usuarioModelo(conexion);


module.exports={
    Usuario:Usuario,
}
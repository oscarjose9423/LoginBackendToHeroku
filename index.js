const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// ************* INSTANCIA DE EXPRESS ****************

const app = express();
app.use(cors());


// app.use((req,res,next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods: GET, POST, DELETE');
//     next();
// })



// ************* MIDDLEWARE MORGAN ****************

// middleware que permite caputrar las peticiones, sacar datos del encabezado de las peticiones 
// y mostrarlos en pantalla o consola, funcion intermedia.

app.use(morgan('dev'));

// ****************** BODY PARSER PARA LEER ARCHIVOS JASON*******************

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//primera ruta

// FUNCIÓN DE MANEJO/MANEJADOR o FUNCION ANONIMA
// req, datos que requiere el usuario
// res, datos que se envian al front

app.use('/api', apiRouter);


app.set('PORT', 3000);

// normalmente el backend se corre el puerto 3000
app.listen(app.get('PORT'), () => {
    console.log('server up');
});

//              INSTALACIONES

// NODEMON; se instalo nodemon para estar haciendo cambios constantes en la visualización
// del local host, para ejecutar se realiza node index, pero con nodemon es nodemon index

//  BODY PARSER
// BCRYPT
// SEQUELIZE
//      se instalo driver de mySQL
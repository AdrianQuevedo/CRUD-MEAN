// Archivo que arranca el servidor (configura)
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//importo el modulo de la base de datos
const {mongoose}= require('./databases');

//------------ CONFIGURACION----------------//

//variable con el puerto, para ser accedido desde toda la app, process.env.PORT levanta el puerto que se me da desde la nube
app.set('port', process.env.PORT || 3000);

//------------- MIDDLEWARES----------------//

//loggeo peticiones por consola
app.use(morgan('dev'));
//entiendo json's mediante express.json
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//---------------- RUTAS-------------------//

app.use('/api/users',require('./routes/user.routes'));

//servidor escucha en puerto 3000
app.listen(app.get('port'), ()=> {
    console.log("servidor ejecutanto en puerto "+app.get('port'));
})
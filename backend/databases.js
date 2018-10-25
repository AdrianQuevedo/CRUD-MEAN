// conecta a la base de datos

const mongoose= require('mongoose');

//direccion de base de datos
const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('base de datos conectada'))
    .catch(err => console.error(err));


module.exports = mongoose;
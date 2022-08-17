const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jueves')
  .then((result) => {
    console.log("CONECTADO A MONGO");
  }).catch((error) => {
    console.log("ERROR AL CONECTAR: ", error);
  })
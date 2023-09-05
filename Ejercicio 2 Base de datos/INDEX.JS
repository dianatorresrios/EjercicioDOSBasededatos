const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tu_supermercado', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB', err));

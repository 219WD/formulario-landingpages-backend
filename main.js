const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect('mongodb+srv://jcanepaweb-formdb:1jXWuqpDJn5BU2dr@form-db.1sdqwxm.mongodb.net/')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Rutas
const formularioRouter = require('./routes/formulario.routes');
app.use('/api/formularios', formularioRouter);

app.listen(PORT, () => {
  console.log(`Server en el puerto ${PORT}`);
});

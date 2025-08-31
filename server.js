const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/app_tienda_online';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true // Added option for better compatibility
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión: ', err));

// Basic routes
app.get('/', (req, res) => {
  res.send('API de App Tienda Online');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
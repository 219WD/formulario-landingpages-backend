const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Crear el esquema
const FormularioSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: String, required: true },
  empresa: { type: String, required: true },
  motivo: { type: String, required: true },
  descripcion: { type: String, required: true },
  objetivos: { type: String, required: true },
  publico: { type: String, required: true },
  propuesta: { type: String, required: true },
  elementos: { type: String, required: true },
  cta: { type: String, required: true },
  integraciones: { type: String, required: true },
  formulario: { type: String, required: true },
  testimonios: { type: String, required: true },
  promociones: { type: String, required: true },
  referencias: { type: String, required: true },
  dominio: { type: String, required: true },
  seo: { type: String, required: true },
  plazo: { type: String, required: true },
  presupuesto: { type: String, required: true },
});

module.exports = mongoose.model('Formulario', FormularioSchema);

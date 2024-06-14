const Formulario = require('../models/formulario.model');

const createFormulario = async (req, res) => {
  const formulario = new Formulario(req.body);
  await formulario.save();

  res.status(201).json({ message: `Formulario creado: ${req.body.nombre}` });
};

const findAllFormularios = async (req, res) => {
  const formularios = await Formulario.find();
  res.json({ message: "Buscar todos los formularios", data: formularios });
};

const findFormularioById = async (req, res) => {
  const formulario = await Formulario.findById(req.params.id);

  if (!formulario) {
    res.status(404).json({ message: "Formulario no encontrado" });
  } else {
    res.json({ message: "Buscar formulario por Id", data: formulario });
  }
};

const updateFormularioById = async (req, res) => {
  const formulario = await Formulario.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!formulario) {
    res.status(404).json({ message: "Formulario no encontrado" });
  } else {
    res.json({ message: "Formulario actualizado", data: formulario });
  }
};

const deleteFormularioById = async (req, res) => {
  const formulario = await Formulario.findByIdAndDelete(req.params.id);

  if (!formulario) {
    res.status(404).json({ message: "Formulario no encontrado" });
  } else {
    res.json({ message: "Formulario eliminado" });
  }
};

module.exports = {
  createFormulario,
  findAllFormularios,
  findFormularioById,
  updateFormularioById,
  deleteFormularioById
};

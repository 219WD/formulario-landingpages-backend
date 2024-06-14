const { Router } = require('express');
const { 
  createFormulario, 
  findAllFormularios, 
  findFormularioById, 
  updateFormularioById, 
  deleteFormularioById 
} = require('../controller/formulario.controller');
const { body, param } = require('express-validator');
const { expressValidations } = require('../middlewares/common.validations');

const formularioRouter = Router();

// Create
formularioRouter.post('/create', [
  body('nombre', 'Debe mandar un nombre').notEmpty(),
  body('email', 'Debe mandar un email').isEmail(),
  body('telefono', 'Debe mandar un telefono').notEmpty(),
  body('empresa', 'Debe mandar una empresa').notEmpty(),
  body('motivo', 'Debe mandar un motivo').notEmpty(),
  body('descripcion', 'Debe mandar una descripcion').notEmpty(),
  body('objetivos', 'Debe mandar unos objetivos').notEmpty(),
  body('publico', 'Debe mandar un publico').notEmpty(),
  body('propuesta', 'Debe mandar una propuesta').notEmpty(),
  body('elementos', 'Debe mandar unos elementos').notEmpty(),
  body('cta', 'Debe mandar un CTA').notEmpty(),
  body('integraciones', 'Debe mandar unas integraciones').notEmpty(),
  body('formulario', 'Debe mandar un formulario').notEmpty(),
  body('testimonios', 'Debe mandar unos testimonios').notEmpty(),
  body('promociones', 'Debe mandar unas promociones').notEmpty(),
  body('referencias', 'Debe mandar unas referencias').notEmpty(),
  body('dominio', 'Debe mandar un dominio').notEmpty(),
  body('seo', 'Debe mandar un SEO').notEmpty(),
  body('plazo', 'Debe mandar un plazo').notEmpty(),
  body('presupuesto', 'Debe mandar un presupuesto').notEmpty()
], 
expressValidations, 
createFormulario);

// ReadAll
formularioRouter.get('/findAll', findAllFormularios);

// ReadByID
formularioRouter.get('/findById/:id', [
  param('id', 'Debe mandar un Id valido').isMongoId()
], 
expressValidations, 
findFormularioById);

// Update
formularioRouter.put('/updateById/:id', [
  param('id', 'Debe mandar un Id valido').isMongoId()
], 
expressValidations, 
updateFormularioById);

// Delete
formularioRouter.delete('/deleteById/:id', [
  param('id', 'Debe mandar un Id valido').isMongoId()
], 
expressValidations, 
deleteFormularioById);

module.exports = formularioRouter;

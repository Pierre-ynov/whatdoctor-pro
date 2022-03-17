'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addProfessionnelSante = function addProfessionnelSante (req, res, next) {
  var professionnelSante = req.swagger.params['professionnelSante'].value;
  Default.addProfessionnelSante(professionnelSante)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pro_santeAddPatientPOST = function pro_santeAddPatientPOST (req, res, next) {
  var ids = req.swagger.params['ids'].value;
  Default.pro_santeAddPatientPOST(ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pro_santeRechercheSpecialityPOST = function pro_santeRechercheSpecialityPOST (req, res, next) {
  var speciality = req.swagger.params['speciality'].value;
  var cordonnee = req.swagger.params['cordonnee'].value;
  Default.pro_santeRechercheSpecialityPOST(speciality,cordonnee)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

'use strict';

const { db } = require("../configs/dbConfig");


/**
 * Ajoute un professionnel de santé
 *
 * professionnelSante ProfessionnelSante  (optional)
 * no response value expected for this operation
 **/
exports.addProfessionnelSante = function(professionnelSante) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Ajouter un patient suivi à un professionnel de santé
 *
 * ids Ids 
 * no response value expected for this operation
 **/
exports.pro_santeAddPatientPOST = function(ids) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recherche de professionnel par spécialité
 *
 * speciality String 
 * cordonnee Coordonnee 
 * no response value expected for this operation
 **/
exports.pro_santeRechercheSpecialityPOST = async function(speciality,cordonnee) {
  const result = await db.query(`SELECT * FROM professionnelsante WHERE speciality = ${speciality}`)
  return new Promise(function(resolve, reject) {
    resolve(result);
  });
}


'use strict';

const { db } = require("../configs/dbConfig");


/**
 * Ajoute un professionnel de santé
 *
 * professionnelSante ProfessionnelSante  (optional)
 * no response value expected for this operation
 **/
exports.addProfessionnelSante = async function(professionnelSante) {
  const res = await db.query(
    'INSERT INTO professionnalSante (id,name,speciality,longitude,latitude) VALUES ($1,$2,$3,$4,$5)',
    [professionnelSante.id,professionnelSante.name,professionnelSante.speciality,
    professionnelSante.longitude,professionnelSante.longitude]);
  return new Promise(function(resolve, reject) {
    resolve("Professionnel de sante creee");
  });
}


/**
 * Ajouter un patient suivi à un professionnel de santé
 *
 * ids Ids 
 * no response value expected for this operation
 **/
exports.pro_santeAddPatientPOST = async function(ids) {
  const res = await db.query('INSERT INTO patientlinkprofessionnelsante (patientid,professionnelsanteid) VALUES ($1,$2)',
  [ids.patientId,ids.professionnelSanteId]);
  return new Promise(function(resolve, reject) {
    resolve("Patient suivi a ete ajoute au profesionnel de sante");
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

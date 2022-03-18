const axios = require('axios')
const {db} = require('dbService')

exports.patient_exist = function (id) {
	axios
  .get(`localhost:8080/patient/exist/${id}`)
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    return res
  })
  .catch(error => {
    console.error(error)
  })
}

exports.deletePatientSuivi = function (id) {
	const result = await db.query(`DELETE FROM PatientSuivi WHERE PatientId=${id}`)
	return new Promise(function(resolve, reject) {
    resolve(result);
  });
}

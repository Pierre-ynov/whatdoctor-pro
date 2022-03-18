const maxDistance = 200 

const distance= function (x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))
}


module.exports.distanceTouser = function (userCood, proList) {
	var userLong = userCood.longitude
	var userLat = userCood.latitude
	var proSanteProche = []
	proList.forEach(proSante => {
		if (proSante.longitude<userLong + maxDistance && proSante.longitude>userLong - maxDistance){
			if (proSante.latitude < userLat + maxDistance && proSante.latitude > userLaFt - maxDistance) {
				if (distance(userLong, userLat, proSante.longitude, proSante.latitude) < maxDistance) {
					proSanteProche.push(proSante)
				}
			}
		}
	})
	return proSanteProche
}
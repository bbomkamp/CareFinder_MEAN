let express = require('express');
let router = express.Router();
let hospitalController = require('../controllers/hospitalController');


router.get('/',  hospitalController.findAllHospitals);
router.get('/id/:providerId', hospitalController.findProviderId);
// router.get('/name/:hospitalName',  hospitalController.findHospitalName);
// router.get('/city/:cityName',  hospitalController.findCity);
// router.get('/state/:stateName',  hospitalController.findState);
// router.get('/county/:countyName', hospitalController.findCounty);
// router.get('/type/:hospitalType',  hospitalController.findHospitalType);
// router.get('/ownership/:hospitalOwner',  hospitalController.findHospitalOwner);
// router.get('/emergency/:hospitalEmergency',  hospitalController.findHospitalEmergency);



module.exports = router;

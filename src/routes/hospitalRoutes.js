let express = require('express');
let router = express.Router();
let hospitalController = require('../controllers/hospitalController');


router.get('', hospitalController.find);
// router.post('',  hospitalController.post);
// router.put('',  hospitalController.put);
// router.delete('',  hospitalController.delete);

/*
router.get('/',  hospitalController.findAllHospitals);
router.get('/id', hospitalController.findProviderId);
router.get('/name',  hospitalController.findHospitalName);
router.get('/city',  hospitalController.findCity);
router.get('/state',  hospitalController.findState);
router.get('/county', hospitalController.findCounty);
router.get('/type',  hospitalController.findHospitalType);
router.get('/ownership',  hospitalController.findHospitalOwner);
router.get('/emergency/:hospitalEmergency',  hospitalController.findHospitalEmergency);
*/



module.exports = router;

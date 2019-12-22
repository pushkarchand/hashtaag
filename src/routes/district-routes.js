const router = require('express')['Router']();
const cityController=require('../controllers/district-controller');


router.get('/',cityController.getDistrictDetails);
module.exports = router;
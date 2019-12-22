const router = require('express')['Router']();
const stateController=require('../controllers/state-controller');


router.get('/',stateController.getStateDetails);

module.exports = router;
const router = require('express')['Router']();
const townController=require('../controllers/town-controller');


router.post('/',townController.createTowns);
router.get('/',townController.getTownDetails);
module.exports = router;
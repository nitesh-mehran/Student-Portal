const router = require('express').Router()
const regC = require('../controllers/regcontroller')



router.get('/registration', regC.regpage)
router.post('/regsubmit', regC.regdata)


module.exports = router

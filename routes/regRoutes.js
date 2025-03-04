const router = require('express').Router()
const regC = require('../controllers/regcontroller')






router.get('/registration', regC.regpage)
router.post('/regsubmit', regC.regdata)
router.get('/' , regC.startloginpage)
router.post('/loginform' , regC.loginformpage)


module.exports = router

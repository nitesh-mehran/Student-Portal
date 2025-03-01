const router = require('express').Router()
const adminC = require('../controllers/admincontroller')

router.get('/admin', adminC.admin)
router.post('/adminsubmit', adminC.admindata)
router.get('/admin', adminC.login , )
router.get('/admin-login', adminC.login , )

router.get('/adminreg', adminC.adminregpage)

module.exports = router
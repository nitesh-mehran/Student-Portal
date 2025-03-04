const router = require("express").Router();
const adminC = require("../controllers/admincontroller");

router.get("/admin", adminC.admindashboard);
router.post("/adminsubmit", adminC.admindata);
router.get("/admin-login", adminC.loginpage);
router.get("/adminreg", adminC.adminregpage);

module.exports = router;

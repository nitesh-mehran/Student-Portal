const router = require('express').Router()
const stuC = require('../controllers/stucontroller')

// function handlelogin(req, res, next)  {
//     if (req.session.isAuthenticated ) {
//       next(); 
//     } else {
//       res.redirect("/startlogin"); 
//     }
//   };
  

router.get('/home', stuC.homepage)
router.post('/submit', stuC.sendData)
router.get('/success' , stuC.success , )
router.get('/admin', stuC.admindash , )
router.get('/delete/:id', stuC.removeData , )

router.get('/register', stuC.formapi , )
router.get('/about', stuC.aboutpage , )
router.get('/contact', stuC.contactpage , )
router.get('/edit/:id', stuC.editpage , )
router.post('/update/:id', stuC.updatedata , )

module.exports = router



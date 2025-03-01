const admin = require('../models/admin')



exports.admin = async(req, res)=>{
   
    res.render('dashboard')
}        

exports.admindata = (req, res)=>{
    const { email , password } = req.body

    const form = new admin({
        adminEmail : email,
        adminPassword : password
    })
    form.save()
    res.redirect('dashboard')
}

exports.login = (req,res)=>{
    res.render("adminlogin")
    res.redirect('/admin')
}
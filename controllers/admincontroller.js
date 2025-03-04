const admin = require('../models/admin')



exports.admindashboard = async(req, res)=>{
   
    res.render('dashboard')
}        

exports.admindata = (req, res)=>{
    const {ausername, aemail , apassword } = req.body

    const form = new admin({
        adminUsername : ausername,
        adminEmail : aemail,
        adminPassword : apassword
    })
    form.save()
    res.redirect('admin-login')
}

exports.loginpage = (req,res)=>{
    res.render("adminlogin")
}

exports.adminregpage = async(req, res)=>{
   
    res.render('adminregistration')
}        
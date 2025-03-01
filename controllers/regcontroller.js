const registration = require('../models/registration ')


exports.regpage = (req, res)=>{
    res.render('registration')
}

exports.regdata = (req, res)=>{
    const {username , email , password } = req.body

    const form = new registration({
        regUsername : username,
        regEmail : email,
        regPassword : password
    })
    form.save()
}
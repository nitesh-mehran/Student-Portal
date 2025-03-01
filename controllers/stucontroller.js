const student = require('../models/student')

exports.formapi = (req,res)=>{
res.render('form')
}

exports.success = (req, res)=>{
    const name = req.query.name || "nitesh"
    res.render('success', { name } );

}

exports.sendData = (req, res)=>{
    const {name , age, email , fees} = req.body

    const form = new student({
        stuName : name,
        stuAge : age,
        stuEmail : email,
        stuFees : fees
    })
    form.save()
    res.redirect(`/success?name=${encodeURIComponent(name)}`);
}

exports.admindash = async(req, res)=>{
    const record = await student.find()
    record.sort((a, b) => a.stuName.localeCompare(b.stuName)); 
    res.render('dashboard', {record})
}               

exports.removeData = async(req, res)=>{
    const id = req.params.id
    await student.findByIdAndDelete(id)
    res.redirect('/admin')
}


exports.homepage = (req,res)=>{
    res.render("home")
}
exports.aboutpage = (req,res)=>{
    res.render("about")
}
exports.contactpage = (req,res)=>{
    res.render("contact")
}
exports.editpage = async(req,res)=>{
    const id =  req.params.id
   const record = await student.findById(id)
   
    res.render("edit", {record})
} 
exports.updatedata = async(req,res)=>{
    const id =  req.params.id
    const {name , age, email , fees} = req.body

    await student.findByIdAndUpdate( id ,{
        stuName : name,
        stuAge : age,
        stuEmail : email,
        stuFees : fees 
    })
    res.redirect('/admin')
   
} 
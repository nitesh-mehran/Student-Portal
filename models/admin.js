const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    adminUsername : String,
    adminEmail : String,
    adminPassword : String
})



module.exports = mongoose.model('admin', adminSchema)
const mongoose = require('mongoose')

const stuSchema = mongoose.Schema({
    stuName : String,
    stuAge : Number,
    stuEmail : String,
    stuFees : Number
})

module.exports = mongoose.model('student', stuSchema)






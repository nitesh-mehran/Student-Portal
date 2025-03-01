const mongoose = require('mongoose')

const regSchema = mongoose.Schema({
    regUsername : String,
    regEmail : String,
    regPassword : String
})

module.exports = mongoose.model('registration', regSchema)
const mongoose = require('mongoose')
const QuestionSchema = new mongoose.Schema({
    description: String,
    options: [
           {
               text: String
           }           
    ]
})

module.exports = mongoose.model('Question', QuestionSchema)
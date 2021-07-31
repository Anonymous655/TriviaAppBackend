const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: String,
    options: [
        {
            text:{
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true
            }
        }
            
    ]
})

module.exports = mongoose.model('User', UserSchema)
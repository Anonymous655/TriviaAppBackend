const User = require("../models/User")
const Question = require('../models/Question')

exports.getName = async (req, res) => {

    const {name} = req.body;
    try {
        let user = await User.findOne({ name });
        if(user){
            return res.status(400).json({ msg: "User already exists, try a different name" })
        }
        user = new User({
            name
        })
        await user.save()
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Server Error")
    }


}
exports.getAllQuestions =  async (req, res) => {
    try {
        const questions = await Question.find()
        return res.status(200).json(questions)
    } catch (err) {
        return res.status(500).json({"error": err})
    }
}
exports.getOneQuestion =  async (req, res) => {
    try {
        const id = req.params.id
        const question = await Question.findById(id)
        if(!question){
            return res.status(404).json({"error": "Not Found"})
        }else{
            return res.status(200).json(question)
        }

    } catch (err) {
        return res.status(500).json({error: err})
    }
}

exports.postAnswer = async (req, res) => {
    try {
        const { name, description, options } = req.body
        let user = await User.findOne({ name })
        user = {
            name,
            description,
            options   
        }
        await user.save()
    } catch (err) {
        console.error(err.message);
        res.status(500).json({error: err})
    }

}
exports.getAllAnswers = async (req, res) => {
    try {
        const { name } = req.body
        let user = await User.find({name})
        res.status(200).json(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).json({error: err})
    }
}
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

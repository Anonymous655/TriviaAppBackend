const express = require('express')
const router = express.Router()
const {createQuestions}  = require('./controller/createQuestions')
const userController  = require('./controller/userInteraction')

// questions creation route
router.post('/questions', createQuestions)


// user interaction routes
//First page, posting name and saving it

router.post('/', userController.getName)

// get all quiz questions
router.get('/questions', userController.getAllQuestions)

// get one quiz question
router.get('/questions/:id', userController.getOneQuestion)

// post quiz answer
router.post('/', userController.postAnswer)

// getAllAnswer
router.get('/', userController.getAllAnswers)

// get all users and answers
router.get('/', userController.getAllUsers)







module.exports = router
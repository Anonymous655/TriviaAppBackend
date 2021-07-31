
exports.createQuestions = async (req, res) => {
        try {
                const { description, options } = req.body
                const newQuestion = new Question({
                    description,
                    options
                })
                await newQuestion.save()
                res.status(201).json({success: true})
        
            } catch (err) {
                return res.status(500).json({"error": err})
            }
        }





const completedTodos = require('../Models/completedTodoSchema')

exports.addCompletedTodo = async(req,res)=>{
    const {email,title,description} = req.body
   
        try{
            const newCompletedTodo = new completedTodos({
                email,title,description
              })
              await newCompletedTodo.save()
              res.status(200).json(newCompletedTodo)
          
    }catch(error){
        res.status(401).json(error)
    }
}

exports.getCompletedTodo = async(req,res)=>{
    const {email}=req.params
    try {
        
        const completed = await completedTodos.find({email})
        res.status(200).json(completed)
    } catch (error) {
        res.status(401).json(error) 
    }
}
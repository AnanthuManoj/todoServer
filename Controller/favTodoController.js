const favTodos = require('../Models/favTodoSchema')

exports.addFavTodo = async(req,res)=>{
    const {email,title,description} = req.body
    try{
        const existTodo = await favTodos.findOne({email,title})
        if(existTodo){
           res.status(406).json('Todo already added')
        }else{
            const newFavTodo = new favTodos({
                email,title,description
              })
              await newFavTodo.save()
              res.status(200).json(newFavTodo)
        }
         
    }catch(error){
        res.status(401).json(error)
    }
}

exports.getFavTodo = async(req,res)=>{
    const {email}=req.params
    try {
        
        const favTodo = await favTodos.find({email})
        res.status(200).json(favTodo)
    } catch (error) {
        res.status(401).json(error) 
    }
}
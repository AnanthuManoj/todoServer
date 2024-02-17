const delTodos = require('../Models/delTodoSchema')

exports.addDelTodo = async(req,res)=>{
    const {email,title,description} = req.body
        try{
            const newDelTodo = new delTodos({
                email,title,description
              })
              await newDelTodo.save()
              res.status(200).json(newDelTodo)
          
    }catch(error){
        res.status(401).json(error)
    }
}

exports.getDelTodo = async(req,res)=>{
    const {email}=req.params
    try {
        
        const getDelTodo = await delTodos.find({email})
        res.status(200).json(getDelTodo)
    } catch (error) {
        res.status(401).json(error) 
    }
}

exports.delAllTodos = async(req,res)=>{
    const{email}=req.params
    try{
        await delTodos.deleteMany({email})
        res.status(200).json('deleted')
    }catch(error){
        res.status(401).json(error)
    }
}
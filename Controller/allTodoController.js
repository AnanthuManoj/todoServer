const alltodos = require('../Models/allTodoSchema')

exports.addtodos = async (req,res)=>{
    const {email,title,description} = req.body
    try {
        const newTodos = new alltodos({
            email,title,description  
        })
        await newTodos.save()
        res.status(200).json(newTodos)
    } catch (error) {
        console.log(error);
        res.status(406).json(error)
    }
}

exports.getTodos = async (req, res)=>{
    const searchkey = req.query.search
  console.log(searchkey);
  const query={
    title:{
      $regex:searchkey,$options:'i'
     }
  }
    try{
        const result = await alltodos.find(query)
        res.status(200).json(result)
    }catch(err){
        console.log(err);
        res.status(401).json(err)
    }
}

exports.getuserTodos = async (req, res)=>{
    const { email } = req.params;
    console.log(email);
    
    try{
        const result = await alltodos.find({email})
        res.status(200).json(result)
    }catch(err){
        console.log(err);
        res.status(401).json(err)
    }
}

exports.deleteTodos = async (req,res)=>{
    const {id}= req.params
    try {
        await alltodos.deleteMany({_id:id})
    } catch (error) {
        console.log(err);
        res.status(401).json(err)
    }
}
const TodoModels = require('../models/TodoModels');


module.exports.getTodo = async (req,res)=>{
    const toDo = await TodoModels.find()
    res.send(toDo)
}

module.exports.saveTodo = (req,res)=>{
    const {text} = req.body

    TodoModels.create({text})
    .then((data)=> {
        console.log("added successfully");
        console.log(data);
        res.send(data)
    })
   
}

module.exports.updateTodo = async (req,res)=>{
    const { _id ,text} = req.body
    TodoModels.findByIdAndUpdate(_id, {text})
    .then(()=> res.send("update successfully.."))
    .catch((err)=> console.log(err))
}

module.exports.deleteTodo = async (req,res) =>{
    const { _id, text} = req.body
    TodoModels.findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully.."))
    .catch((err)=> console.log(err))
}
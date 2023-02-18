import axios from "axios";

const baseUrl = "http://localhost:5000"

const getAllTodo = (setTodo) =>{
    axios.get(baseUrl)
    .then(({data})=>{
        console.log('data');
        setTodo(data)
    })
}

const addToDo = (text,setText,setTodo) =>{
axios.post(`${baseUrl}/save`,{text})
.then((data)=> {
    console.log(data);
    setText("")
    getAllTodo(setTodo);
})
.catch((err)=> console.log(err))
}

const updateToDo = (toDoId,text,setTodo, setText, setIsUpdating) =>{
    axios.post(`${baseUrl}/update`,{_id: toDoId, text})
    .then((data)=> {
        console.log(data);
        setText("")
        setIsUpdating(false)
        getAllTodo(setTodo)
    })   
}

const deleteToDo = (_id,setTodo) =>{
    axios.post(`${baseUrl}/delete`,{_id})
    .then((data)=> {

        getAllTodo(setTodo)
    })
    
}


export {getAllTodo, addToDo, updateToDo, deleteToDo }
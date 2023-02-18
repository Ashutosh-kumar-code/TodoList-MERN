import './App.css';
import ToDo from './components/ToDo';
import { useEffect, useState } from 'react';
import { getAllTodo, addToDo, updateToDo, deleteToDo } from './utils/HandleApi'

function App() {
const [toDo, setToDo] = useState([])
const [text, setText] =useState("")
const [isUpdating, setIsUpdating] = useState(false)
const [toDoId, setToDoId] = useState("")

useEffect(()=> {
  getAllTodo(setToDo)
},[])

const updateMode = (_id, text)=> {
 setIsUpdating(true)
 setText(text)
 setToDoId(_id)
}

return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

    <div className="top">
      <input type="text" placeholder='Add toDos...' value={text} onChange={(e)=> setText(e.target.value) } />

      <div className="add" onClick={ isUpdating? 
          ()=>updateToDo(toDoId, text, setToDo, setText, setIsUpdating) 
        : ()=> addToDo(text, setText, setToDo)} >
        { isUpdating ? "Update" : "Add" }</div>
    </div>

    <div className="list">
      {toDo.map((item)=> 
      <ToDo key={item._id}
       text={item.text}
       updateMode = {()=> updateMode(item._id,item.text)}
       deleteTodo= {()=> deleteToDo(item._id, setToDo) }
       /> )}
      
    </div>

      </div>
    </div>
  );
}

export default App;

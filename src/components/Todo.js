import React,{useState} from 'react'

const Todo = () => {
    const [task,setTask]=useState("");
    const [todos,setTodos]=useState([]);
    const addTask=()=>{
       setTodos([...todos,task]);
    }
  const deleteBtn=(id)=>{
   let newTodos=todos.filter((elem,index)=>
      index!==id
    )
    setTodos(newTodos);
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <input type="text" onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={addTask}>Add Todo</button>
   
    <ul>
     {todos && todos.map((todo,index)=>
     <div>
     <li>{todo}</li>
     <button onClick={()=>{deleteBtn(index)}}>Delete</button>
     </div>
    )}
    </ul>
     </div>
  )
}

export default Todo

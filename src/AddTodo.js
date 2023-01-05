import React, { useState } from 'react'
import './AddTodo.css'

function AddTodo(props) {
const [todoTitle, setTodoTitle] = useState('')
console.log(todoTitle)

const addTodoHandler=()=>{
    // {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "delectus aut autem",
    //     "completed": false
    // }
    const todo = {
        "userId": 1,
        "id": Date.now(),
        "title": todoTitle,
        "completed": false
    }
    props.add(todo)
    setTodoTitle('')
}
  return (
    <div className='inputContainer' >
        <input placeholder='Todo Title..' value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)} />
        <span onClick={addTodoHandler} ><i  style={{color:'#424874'}} class="fa-solid fa-plus"></i></span>
        {/* <button onClick={addTodoHandler} >add</button> */}
    </div>
  )
}

export default AddTodo
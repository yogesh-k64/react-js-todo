import React, { Component, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const App = () => {
  const [list, setList] = useState([]);

  const getTodos = async() => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      // .then((json) => console.log(json));
      console.log(result);
    setList(result);
  };

  useEffect(() => {
    getTodos()
  }, []);

  const addTodo =(todoDetails)=>{
    setList(list=>[todoDetails,...list])
  }

  const delTodo =(todoDetails)=>{
    setList(list=>{
      return list.filter(item=>item.id !== todoDetails.id)
    })
  }
  const completeTask=(todoDetails)=>{
    setList(list=>{
      const index = list.findIndex(val=>val.id === todoDetails.id)
      const alterList = [...list]
      alterList[index] = {...todoDetails,completed: list[index].completed ? false : true}
      return alterList
    })
  }

console.log(list)
  return (
    <div className="App">
      <div className="innerContainer">
        <AddTodo add={addTodo}  />
        <TodoList list={list} complete={completeTask} del={delTodo} />
      </div>
    </div>
  );
};

export default App;

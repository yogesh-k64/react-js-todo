import React from "react";
import TodoCard from "./TodoCard";
import "./TodoList.css";
import noTask from './media/no-task.png'

function TodoList(props) {
  const list = props.list;
  console.log(props);
  return (
    <div className="todoList">
      <div className="title">Todo list</div>
      {list.length ? (
        list.map((item) => (
          <TodoCard complete={props.complete} item={item} del={props.del} />
        ))
      ) : (
        <div className="notodo" >
            <h2>No Todo's</h2>
            <img src={noTask} />
        </div>
      )}
    </div>
  );
}

export default TodoList;

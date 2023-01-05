import React from "react";
import "./TodoCard.css";

function TodoCard(props) {
  const task = props.item;

  return (
    <div className="todoItem">
      <div className="titleContainer" style={{color:'#424874'}} >{task.title}</div>
      <div className="buttonContainer">
        <i
          onClick={()=>props.complete(task)}
          class="fa-regular fa-circle-check"
          style={{ color: task.completed ? "#39ce5a" : "#e55b5b" }}
          color={task.completed ? "#39ce5a" : "#e55b5b"}
        ></i>
        <i onClick={() => props.del(task)} class="fa-solid fa-ban"></i>
      </div>
    </div>
  );
}

export default TodoCard;

import React from "react";

function Todo({ todo, index, checkedTodo, deleteTodo }) {
  return (
    <div className={todo.isCompleted === true ? "completed" : ""}>
      <input type="checkbox" onClick={() => checkedTodo(index)} />
      {todo.text}
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default Todo;

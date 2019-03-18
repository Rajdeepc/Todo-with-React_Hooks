import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


function App() {
  const [todos, setTodos] = useState([
    { id: "1", text: "Learn about React", isCompleted: false },
    { id: "2", text: "Meet friend for lunch", isCompleted: false },
    { id: "3", text: "Build really cool todo app", isCompleted: false }
  ]);

  const addTodo = textToAdd => {
    const newTodos = [
      ...todos,
      { id: todos.length + 1, text: textToAdd, isCompleted: false }
    ];
    setTodos(newTodos);
  };

  const checkedTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo index={index} key={todo.id} todo={todo} checkedTodo={checkedTodo} deleteTodo={deleteTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;

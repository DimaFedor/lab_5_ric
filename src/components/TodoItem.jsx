import React from "react";

function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  const handleToggle = () => {
    onToggleTodo(todo.id);
  };

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      <span onClick={handleToggle}>{todo.text}</span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}

export default TodoItem;

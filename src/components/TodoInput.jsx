import React from "react";

function TodoInput({ newTodoText, onNewTodoTextChange, onAddTodo }) {
  const handleChange = (event) => {
    onNewTodoTextChange(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddTodo();
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Введіть нову задачу..."
        value={newTodoText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onAddTodo}>Додати</button>
    </div>
  );
}

export default TodoInput;

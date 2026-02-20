import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const trimmedText = newTodoText.trim();
    if (trimmedText === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText("");
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleClearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <TodoInput
        newTodoText={newTodoText}
        onNewTodoTextChange={setNewTodoText}
        onAddTodo={handleAddTodo}
      />

      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />

      {todos.length > 0 && (
        <button className="clear-btn" onClick={handleClearTodos}>
          Очистити все
        </button>
      )}
    </div>
  );
}

export default TodoApp;

import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  return (
    <div className="todo-container">
      <TodoForm
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
};

export default Todo;

import React, { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

const TodoForm = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  //updating todo item
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  //when we click on add task then this function will add the task int the list
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidV4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter the task"
        className="task-input"
        value={input}
        onChange={onInputChange}
        required
      />
      <button className="add-todo" type="submit">
        {editTodo ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TodoForm;

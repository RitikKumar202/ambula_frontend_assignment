import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  //handling todo item i.e making item complete and uncomplete with the help og boolean value
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  //counting total number of completed task
  var taskCompleted = todos.filter((task) => {
    return task.completed;
  }).length;

  //edit task function
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  //delete task function
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="todo-list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`todo-list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="todo-complete"
              onClick={() => handleComplete(todo)}
            >
              <i class="bx bx-check"></i>
            </button>
            <button className="todo-edit" onClick={() => handleEdit(todo)}>
              <i class="bx bxs-edit"></i>
            </button>
            <button className="todo-delete" onClick={() => handleDelete(todo)}>
              <i class="bx bxs-trash-alt"></i>
            </button>
          </div>
        </li>
      ))}
      <div className="total-todos">
        Total Number of tasks: {todos.length} <br />
        Number of completed tasks:{taskCompleted}
      </div>
    </div>
  );
};

export default TodoList;

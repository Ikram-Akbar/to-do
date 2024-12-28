import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Todos = () => {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, name: "Read Books", isCompleted: true },
    { id: 2, name: "Complete Assignment", isCompleted: false },
  ]);


  const addTask = () => {
    if (newTask.trim()) {
      setTodos([
        ...todos,
        { id: todos.length + 1, name: newTask.trim(), isCompleted: false },
      ]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6  rounded-lg ">
      <h2 className="text-2xl font-bold mb-4 text-center">To-Do App</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-slate-950 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 bg-slate-100 rounded-md shadow-sm"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleTaskCompletion(todo.id)}
                className="h-5 w-5"
              />
              <span
                className={`flex-1 ${
                  todo.isCompleted ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.name}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => alert("Edit functionality not implemented yet")}
                className="p-2 text-green-500 hover:text-green-700"
              >
                <FaEdit size={18} />
              </button>
              <button
                onClick={() => deleteTask(todo.id)}
                className="p-2 text-red-500 hover:text-red-700"
              >
                <FaTrash size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

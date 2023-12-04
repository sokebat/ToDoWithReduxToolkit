import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input != "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="todo" className="text-gray-700 text-3xl font-bold">
          Enter a Todo:
        </label>
        <input
          type="text"
          id="todo"
          className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
          placeholder="Enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;

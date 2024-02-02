import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const [val, setVal] = useState("");
  const [edit, setEdit] = useState(false);
  const [editedTodoId, setEditedTodoId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const editTodo = (id) => {
    dispatch(updateTodo({
      id: id,
      text: val,
    }));
    setEdit(false);
    setEditedTodoId(null);
  };

  const handleEditClick = (id, text) => {
    setVal(text); // Set the initial text value when editing starts
    setEdit(true);
    setEditedTodoId(id);
  };

  useEffect(() => {
    // Reset input value and editing state when todos change
    setVal("");
    setEdit(false);
    setEditedTodoId(null);
  }, [todos]);

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex  justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <input
              type="text"
              className="text-white bg-inherit"
              readOnly={!edit || editedTodoId !== todo.id}
              value={editedTodoId === todo.id ? val : todo.text}  
              onChange={(e) => setVal(e.target.value)}
            />
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Remove
            </button>
            <button
              className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              onClick={() => {
                if (edit) {
                  editTodo(todo.id);
                } else {
                  handleEditClick(todo.id, todo.text);
                }
              }}
            >
              {!edit || editedTodoId !== todo.id ? "Update" : "Save"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

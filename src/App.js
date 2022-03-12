import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoList from "./Components/TodoList";

const App = () => {
  const [task, setTask] = useState("");
  const [mytask, setMyTask] = useState([]);

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleOnClick = () => {
    task.length === 0
      ? alert("Enter Your Task!")
      : setMyTask((oldTasks) => {
          return [...oldTasks, task];
        });
    setTask("");
  };

  const handleOnDelete = (id) => {
    setMyTask(
      mytask.filter((items, index) => {
        return id !== index;
      })
    );
  };

  return (
    <>
      <div className="outer_container">
        <div className="todo_container">
          <h1>Todo-List</h1>
          <br />
          <div className="todo_main">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Your Task"
                value={task}
                onChange={handleInput}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={handleOnClick}
              >
                Button
              </button>
            </div>
            <br />
            <ul>
              {mytask.map((currItem, index) => {
                return (
                  <TodoList
                    item={currItem}
                    key={index}
                    id={index}
                    delete={handleOnDelete}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

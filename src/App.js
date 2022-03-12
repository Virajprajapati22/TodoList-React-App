import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
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
      <div>
        <Navbar />
      </div>
      <div className="outer_container">
        <div className="todo_container">
          <h1>
            Todo-List
            <span
              class="badge rounded-pill bg-light"
              style={{
                padding: "8px",
                marginLeft: "6px",
                color: "#af9f4e",
              }}
            >
              {mytask.length}
            </span>
          </h1>
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
                className="btn_submit"
                type="button"
                id="button-addon2"
                onClick={handleOnClick}
              >
                Add
              </button>
            </div>
            <br />
            <ul>
              {mytask.map((currItem, index) => {
                return (
                  <TodoList
                    item={currItem}
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

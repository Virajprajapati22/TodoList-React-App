import "./App.css";
import { List } from "./Components/Lists/List";
import Navbar from "./Components/Navbar/Navbar";
import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState([]);

  const onChangeInput = (e) => {
    const newTask = e.target.value;
    setTask(newTask);
  };

  const [myTask, setMyTask] = useState([]);

  const onSubmitHandler = () => {
    const temp = task;
    setMyTask([...myTask, temp]);
    setTask([]);
  };

  const onDeleteHandler = (index) => {
      console.log(index);
  };

  return (
    <>
      <div>
        <Navbar size={myTask.length} />
      </div>
      <div>
        <List
          Task={task}
          myTask={myTask}
          onSubmit={onSubmitHandler}
          onChangeInput={onChangeInput}
          onDelete={(index) => onDeleteHandler.bind(this, index)}
        />
      </div>
    </>
  );
};

export default App;

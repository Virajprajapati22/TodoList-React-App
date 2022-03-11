import React, { useState } from "react";
import "./List.css";
import Listitems from "./Listitems";

export const List = (props) => {
  const task = [...props.myTask];

  return (
    <div className="list_main">
      <div class="input-group mb-3" id="edit_input">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your Task"
          value={props.Task}
          name="task"
          onChange={props.onChangeInput}
        />
        <button
          class="btn btn-success"
          type="button"
          id="button-addon2"
          onClick={props.onSubmit}
        >
          Add
        </button>
      </div>
      <div className="list_div">
        <Listitems onDelete={props.onDelete.bind(this)} items={props.myTask} />
      </div>
    </div>
  );
};

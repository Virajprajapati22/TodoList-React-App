import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#258135",
          justifyContent: "center",
          fontWeight: "bold",
          height: "80px",
          border: "1px soild",
          borderRadius: "5px",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        <a
          className="navbar-brand"
          href="#"
          style={{
            color: "#ffffff",
            letterSpacing: "1px",
            fontSize: "25px",
          }}
        >
          Todo-List
          <span
            className="badge bg-light text-dark rounded-circle"
            style={{
              marginLeft: "5px",
            }}
          >
            {props.size}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

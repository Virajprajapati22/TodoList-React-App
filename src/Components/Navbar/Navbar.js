import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  const handleOnClickLogin = () => {
    return <h1>Hello world</h1>;
  };

  return (
    <>
      <nav className="navbar navbar-light" id="nav_main">
        <div className="container-fluid">
          <span className="nav_span h2">Todo-ReactApp</span>
        </div>
        <button
          type="button"
          className="btn_login"
          onClick={handleOnClickLogin}
        >
          Register
        </button>
      </nav>
    </>
  );
};

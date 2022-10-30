import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

function Navbar() {
  const { dispatch , user} = useContext(AuthContext);


  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };
  return (
    <div className="topbar">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            PICT Student Care
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/feedbacks">
                  Feedbacks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">
                  AboutUs
                </a>
              </li>
              {user.isAdmin && <li className="nav-item">
                <a className="nav-link" href="/admin">
                  Admin
                </a>
              </li>}

              <li className="nav-item">
                <a className="nav-link" href="/logout" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

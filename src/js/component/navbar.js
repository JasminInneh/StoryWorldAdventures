import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand brand" to="/">
          StoryWorld Adventures
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav-links d-flex">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">SignUp</li>
          <li className="nav-item">Login</li>
        </ul>
        <div className="dropdown">
          <button
            className="btn btn-warning dropdown-toggle"
            id="nav-dropdown"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-heart"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites?.map((favorite, index) => (
              <li key={index}>
                {favorite.name}
                <button onClick={() => actions.removeFavorites(favorite)}>
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const userName = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };

  return (
    <>
      <div class="container">
        <h1 class="mt-3"> Welcome! </h1>
        <div class="card-body">
          <h5 class="card-title">Hi {userName.email}!</h5>
          <p class="card-text">Welcome to this React app!</p>
          <button class="btn btn-primary" onClick={handleLogout} type="button">
            Log out
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

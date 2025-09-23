import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://img.favpng.com/20/1/12/computer-icons-meetup-icon-design-png-favpng-eXWP3L9aLQbAccM1HfN4pybwU.jpg"
              alt="Logo"
              width="50"
              height="50"
              className="mx-2"
            />
            <span className="fs-4 text-danger">MeetUp</span>
          </Link>
        </div>
      </nav>
  );
};

export default Header;

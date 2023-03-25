import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to="/home">Home</Link>
          <button type="button" onClick={logoutAndRedirectHome}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

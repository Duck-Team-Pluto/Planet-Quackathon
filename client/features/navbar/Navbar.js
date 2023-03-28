import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to="/home">Home</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

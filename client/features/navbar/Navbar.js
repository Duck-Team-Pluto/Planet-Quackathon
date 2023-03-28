import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <h2>MISSION CONTROL</h2>
        </div>
        <div className='navlinks'>
          <Link to='/home'>Home</Link>
          <p>this will be a link to "about"</p>
          <p>this will be a list of planets</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

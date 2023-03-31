import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NavButton } from "./NavButton";

const Navbar = () => {
  console.log("hi from navbar");
  return (
    <div>
      <nav>
        <div>
          <h2>
            <span className='navHeading'>MISSION CONTROL</span>
          </h2>
        </div>
        <div className='navlinks'>
          <Link to='/home'>Home</Link>
          <NavButton color='#EE2E31' displayText='TEST' destination='/home' />
          <Link to='/about'>About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

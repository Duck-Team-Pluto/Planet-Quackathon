import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NavButton } from "./NavButton";
import { ColumnContainer, RowContainer } from "../../styled-components/Containers";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ColumnContainer height="12vh" padding="2vh 0 0 0">
            <span className='navHeading'>MISSION CONTROL</span>
        </ColumnContainer>

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

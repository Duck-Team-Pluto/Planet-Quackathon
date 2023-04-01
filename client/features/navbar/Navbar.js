import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NavButton } from "./NavButton";
import {
  ColumnContainer,
  RowContainer,
} from "../../styled-components/Containers";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ColumnContainer height='12vh' padding='2vh 0 0 0'>
          <span className='navHeading'>MISSION CONTROL</span>
        </ColumnContainer>

        <div className='navlinks'>
          <NavButton color='#5036FF' destination='/home' displayText='home' />
          <NavButton color='#36D936' destination='/about' displayText='about' />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

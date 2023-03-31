import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NavDot } from "../../styled-components/NavDot";

export const NavButton = (props) => {
  const { color, displayText, destination } = props;

  return (
    <div className='navButton'>
      <a href={destination}>
        <NavDot color={color} /> {displayText}
      </a>
    </div>
  );
};

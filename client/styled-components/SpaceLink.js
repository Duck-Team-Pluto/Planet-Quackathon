import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const StyledSpaceLink = styled.div`
  &{
  position: relative;
  border: solid 1px rgba(150, 150, 150, 0.5);
  border-radius: 1rem;
  padding: .5rem;
  margin: 0;
  cursor: pointer;
  width: fit-content;
  color: #ccc;
}
&:hover {
  box-shadow: 0 0 1px 1px #ccc;
  transition: ease-in-out 0.15s;
}
& a{
  color: #ccc;
}
`

const SpaceLink = (props) => {
  return(
    <StyledSpaceLink className="space-link">
    <Link to={props.to}>{props.text}</Link></StyledSpaceLink>
  )
}

export default SpaceLink

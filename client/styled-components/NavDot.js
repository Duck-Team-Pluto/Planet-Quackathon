import styled from "styled-components";

export const NavDot = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${(props) => {
    props.color;
  }};
  color: ${(props) => {
    props.color;
  }};
  border-radius: 50%;
  display: inline-block;
  border-style: groove;
  border-color: #818c8a;
`;

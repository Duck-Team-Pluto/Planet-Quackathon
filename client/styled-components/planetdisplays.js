import styled, { keyframes } from "styled-components";

const planetRotate = keyframes`
0% { transform: rotateZ(0deg); }
100% { transform: rotateZ(359deg); }
0% { transform: rotateX(0deg); }
`

export const SinglePlanetImage = styled.div`
  position: absolute;
  display: block;
  margin: -2% 0 0 40%;
  border-radius: 50%;
  height: ${(props) => `${(props.radius ** .25)*50}px`};
  width: ${(props) => `${(props.radius ** .25)*50}px`};
  background: radial-gradient(circle at -100%, rgba(6, 6, 98, 1), rgba(6, 35, 120, 1));
  box-shadow: inset -50px -20px 90px rgba(0, 0, 0, .5), inset 50px 20px 90px rgba(50, 70, 100, .5);
  animation-name: ${planetRotate};
  animation-duration: 20s;
  animation-delay: 0s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: -1;
`

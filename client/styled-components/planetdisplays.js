import styled, { keyframes } from "styled-components";

const planetRotate = keyframes`
0% { transform: rotateZ(0deg); }
100% { transform: rotateZ(359deg); }
0% { transform: rotateX(0deg); }
`

export const SinglePlanetImage = styled.div`
  position: absolute;
  top: 12%;
  left: 45%;
  border-radius: 50%;
  height: ${(props) => `${(props.radius ** .25)*50}px`};
  width: ${(props) => `${(props.radius ** .25)*50}px`};
  background: radial-gradient(circle at -100%, rgba(100, 60, 200, 1), rgba(180, 120, 255, 1));
  background-size: cover;
  box-shadow: inset -50px -20px 90px 20px rgba(0, 0, 0, .75), 0px 0px 20px 6px rgba(255, 255, 255, .25);
  animation-name: ${planetRotate};
  animation-duration: 20s;
  animation-delay: 0s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: -1;
  transform-style: preserve-3d;
`

export const SimplePlanetImage = styled.div`
  position: relative;
  height: ${(props) => `${(props.radius ** .25)*10}px`};
  width: ${(props) => `${(props.radius ** .25)*10}px`};
  border-radius: 50%;
  background: radial-gradient(circle at -100%, rgba(100, 60, 200, 1), rgba(180, 120, 255, 1));
  background-size: cover;
  box-shadow: inset -50px -20px 90px 20px rgba(0, 0, 0, .75), 0px 0px 20px 6px rgba(255, 255, 255, .25);
  color: #ccc;
`

export const Rings = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  height: ${(props) => `${((props.radius ** .25)*50)+5}px`};
  width: ${(props) => `${((props.radius ** .25)*50)+5}px`};
  border: 3rem solid rgba(200, 200, 100, .5);
  transform: rotate3d(1, 0, 0, 75deg);
`

export const TheSun = styled.div`
  position: fixed;
  display: block;
  top: 15%;
  left: 42%;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background-repeat: no-repeat;
  background: radial-gradient(circle at -100%, rgba(255, 180, 76, 1), rgba(255, 200, 100, 1));
  box-shadow: inset 50px -20px 25px rgba(255,245,200,.5), 0px 0px 20px 6px rgba(255, 255, 255, .5);
  z-index: 2;

`

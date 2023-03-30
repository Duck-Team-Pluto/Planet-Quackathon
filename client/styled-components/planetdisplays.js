import styled, { keyframes } from "styled-components";

const planetRotate = keyframes`
0% { transform: rotateZ(0deg); }
100% { transform: rotateZ(359deg); }
0% { transform: rotateX(0deg); }
`

export const SinglePlanetImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  height: ${(props) => `${(props.radius ** .25)*5}vh`};
  width: ${(props) => `${(props.radius ** .25)*5}vh`};
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
  & {
  position: relative;
  margin-bottom: 1vh;
  height: ${(props) => `${(props.radius ** .25)/2}vh`};
  width: ${(props) => `${(props.radius ** .25)/2}vh`};
  border-radius: 50%;
  background: radial-gradient(circle at -100%, rgba(100, 60, 200, 1), rgba(180, 120, 255, 1));
  background-size: cover;
  box-shadow: ${(props) => `
    inset
      ${(props.radius ** .25)/10}vh
      ${(props.radius ** .25)/10}vh
      ${(props.radius ** .25)/5}vh
      ${(props.radius ** .25)/20}vh
      rgba(0, 0, 0, .75),
      0
      0
      ${(props.radius ** .25)/10}vh
      ${(props.radius ** .25)/20}vh
      rgba(255, 255, 255, .25)`};
  color: #ccc;
}

  &:hover {
    height: ${(props) => `${(props.radius ** .25)/1.8}vh`};
    width: ${(props) => `${(props.radius ** .25)/1.8}vh`};
    transition: ease-in-out .25s;

  }
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
  top: 50%;
  left: 50%;
  width: 15rem;
  height: 15rem;
  margin-top: -7.5rem;
  margin-left: -7.5rem;
  border-radius: 50%;
  background-repeat: no-repeat;
  background: radial-gradient(circle at -100%, rgba(255, 180, 76, 1), rgba(255, 200, 100, 1));
  box-shadow: inset 3rem -2rem 2rem rgba(255,245,200,.5), 0 0 2rem .5rem rgba(255, 255, 255, .5);
  z-index: 2;

`

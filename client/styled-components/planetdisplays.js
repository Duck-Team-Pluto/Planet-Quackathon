import styled, { keyframes } from "styled-components";

const planetRotate = keyframes`
0% { transform: rotateZ(0deg); }
100% { transform: rotateZ(359deg); }
0% { transform: rotateX(0deg); }
`;
/*
Mercury: rgba(229, 228, 226, 1), rgba(192, 192, 192, 1)
Venus: rgba(242, 133, 0, 1), rgba(181, 105, 23, 1)
Earth:rgba(0, 112, 187, 1), rgba(30, 77, 43, 1) <== this is terrible, somebody needs to fix it
Mars:rgba(137, 63, 69, 1), rgba(128, 24, 24, 1)
Jupiter:rgba(193, 154, 107, 1), rgba(191, 87, 0, 1)
Saturn:rgba(195, 176, 145, 1), rgba(218, 200, 174, 1)
Uranus:rgba(15, 82, 186, 1), rgba(17, 100, 180, 1)
Neptune:rgba(0, 20, 168, 1), rgba(0, 35, 135, 1)
Pluto:rgba(219, 215, 210, 1), rgba(152, 129, 123, 1)
*/
const mercury = [229, 228, 226, 1];
let color = "#ccc";
color = +color;

const nums = [124, 9, 2, 1];
const nums2 = [137, 63, 69, 1];
let one = nums[0];
console.log("maybe?");

export const SinglePlanetImage = styled.div`
  position: absolute;
  border-radius: 50%;
  height: ${(props) => `${props.radius ** 0.25 * 4}vh`};
  width: ${(props) => `${props.radius ** 0.25 * 4}vh`};
  background: radial-gradient(
    circle at -100%,
    rgba(${(props) => `${props.colorOne}, 1 `}),
    rgba(${(props) => `${props.colorTwo}, 1 `})
  );
  background-size: cover;
  box-shadow: ${(props) => `
    inset
      ${props.radius ** 0.25 / 5}vh
      ${props.radius ** 0.25 / 2}vh
      ${props.radius ** 0.25}vh
      ${props.radius ** 0.25 / 5}vh
      rgba(0, 0, 0, .75),
      0
      0
      ${props.radius ** 0.25 / 10}vh
      ${props.radius ** 0.25 / 20}vh
      rgba(255, 255, 255, .25)`};
  animation-name: ${planetRotate};
  animation-duration: 20s;
  animation-delay: 0s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 2;
`;

export const SimplePlanetImage = styled.div`
  & {
    position: relative;
    margin-bottom: 1vh;
    height: ${(props) => `${props.radius ** 0.25 / 2}vh`};
    width: ${(props) => `${props.radius ** 0.25 / 2}vh`};
    border-radius: 50%;
    background: radial-gradient(
      circle at -100%,
      rgba(${(props) => `${props.colorOne}, 1 `}),
      rgba(${(props) => `${props.colorTwo}, 1 `})
    );
    background-size: cover;

    color: #ccc;
  }

  &:hover {
    height: ${(props) => `${props.radius ** 0.25 / 1.8}vh`};
    width: ${(props) => `${props.radius ** 0.25 / 1.8}vh`};
    transition: ease-in-out 0.25s;
  }
`;

export const Rings = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  height: ${(props) => `${props.radius ** 0.25 * 50 + 5}px`};
  width: ${(props) => `${props.radius ** 0.25 * 50 + 5}px`};
  border: 3rem solid rgba(200, 200, 100, 0.5);
  transform: rotate3d(1, 0, 0, 75deg);
`;

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
  background: radial-gradient(
    circle at -100%,
    rgba(255, 180, 76, 1),
    rgba(255, 200, 100, 1)
  );
  box-shadow: inset 3rem -2rem 2rem rgba(255, 245, 200, 0.5),
    0 0 2rem 0.5rem rgba(255, 255, 255, 0.5);
  z-index: 2;
`;

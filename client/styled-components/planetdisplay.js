import styled from "styled-components";
import { rotateAnimation } from "./starbackground";

export const PlanetImage = styled.div`
  position: absolute;
  display: block;
  margin: -2% 0 0 40%;
  border-radius: 50%;
  height: ${(props) => `${(props.radius ** .25)*50}px`};
  width: ${(props) => `${(props.radius ** .25)*50}px`};
  background: radial-gradient(circle at -100%, rgba(13, 13, 98, 1), rgba(13, 70, 190, 1));
  box-shadow: inset -50px -20px 40px rgba(0, 0, 0, .5), inset -9px -9px 40px -10px #058;
  animation-name: ${rotateAnimation};
  animation-duration: 20s;
  animation-iteration-count: infinite;
  z-index: -1;
`

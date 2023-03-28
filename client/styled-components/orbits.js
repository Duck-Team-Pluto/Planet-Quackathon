import styled, { keyframes } from "styled-components";

const orbitRotate = keyframes`
from {
  transform: rotateZ(0);

}
to {
  transform: rotateZ(359deg);
}

`

export const PlanetOrbit = styled.div`
position: fixed;
  display: block;
  top: ${props=>`${props.yPos}%`};
  left: ${props=>`${props.xPos}%`};
  width: ${props=>`${props.diameter}px`};
  height: ${props=>`${props.diameter}px`};;
  border-radius: 50%;
  animation-name: ${orbitRotate};
  animation-duration: 20s;
  animation-delay: ${props=>`-${props.timeOffset}s`};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 3;
`

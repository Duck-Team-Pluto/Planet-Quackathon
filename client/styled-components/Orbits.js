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
  top: 50%;
  left: 50%;
  width: ${props=>`${props.d1}vh`};
  height: ${props=>`${props.d2}vh `};
  margin-top: ${props=>`${-props.d2/2}vh`};
  margin-left: ${props=>`${-props.d1/2}vh`};
  border-radius: 50%;
  animation-name: ${orbitRotate};
  animation-duration: 50s;
  animation-delay: ${props=>`-${props.timeOffset}s`};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 3;
`

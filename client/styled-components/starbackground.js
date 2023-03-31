import styled, { keyframes } from "styled-components";


// <----    STARS ARE BORN    ---->
// quantity is how many stars (more creates a denser starfield)
// focus should be any number between .25 and 2,
// starsize is the size of the stars in pixels so also between .25 and 2 is best

const starMaker = (quantity, focus, starsize) => {
  const starArr = [...Array(quantity)]
  return starArr.map((star)=>{
    const x = Math.random() * (150) - 75;
    const y = Math.random() * (100) - 50;
    return `${x}rem ${y}rem ${focus}vh ${starsize}vh #fff`
  })
}

export const rotateAnimation = keyframes`
0% { transform: rotate(0deg);}
50% { transform: rotate(180deg);}
100% { transform: rotate(359deg);}
`

export const StarBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 2px;
  width: 2px;
  border-radius: 100%;
  box-shadow: ${props => starMaker(props.density, props.blur, props.size).join(',') || starMaker(350, 1.5, .25)};
  animation-name: ${rotateAnimation};
  animation-duration: ${props => props.time || '600s'};
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  z-index: -4;
`


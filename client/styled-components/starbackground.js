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
    return `${x}rem ${y}rem ${focus}px ${starsize}px #fff`
  })
}

const starMap1 = starMaker(350, 1.5, .25)
const starMap2 = starMaker(200, 1.25, .5)
const starMap3 = starMaker(40, 1.75, 1.25)
const twinkles = starMaker(100, 1, .5)

export const rotateAnimation = keyframes`
from { transform: rotate(0deg);}
to { transform: rotate(359deg);}
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
  animation-iteration-count: infinite;
  z-index: -4;
`

const twinkleAnimation = keyframes`
  0% { transform: rotate(0deg); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: rotate(359deg); opacity: 0; }
`

export const TwinkleStars = styled(StarBackground)`
box-shadow: ${twinkles.join(',')};
animation-name: ${twinkleAnimation};
animation-duration: 480s;
animation-iteration-count: infinite;
z-index: -4;
`


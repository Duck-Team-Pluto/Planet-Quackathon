import styled from "styled-components";


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


const StarBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 2px;
  width: 2px;
  border-radius: 100%;
  box-shadow: ${starMap1.join(',')}, ${starMap2.join(',')}, ${starMap3.join(',')};
`

export default StarBackground

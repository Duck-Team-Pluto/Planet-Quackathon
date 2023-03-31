import React from "react";


const FunFacts = (props) => {
  const planet = props.planet;

  return (
    <>
      <h2>Fun Facts!!!</h2>
      <div className="fun-facts">
        <h3>{planet.factOne}</h3>
         <h3>{planet.factTwo}</h3>
        <h3>{planet.factThree}</h3>
      </div>
    </>
    )
  }
export default FunFacts

import React from "react";
import { ColumnContainer } from "../../styled-components/Containers";

const FunFacts = (props) => {
  const planet = props.planet;
  const units = props.units;
  console.log(units);

  return (
    <ColumnContainer width="30vw">
      <h2>Fun Facts!!!</h2>
      <div className="fun-facts">
        <h3>{planet.factOne}</h3>
        <h3>{planet.factTwo}</h3>
        <h3>{planet.factThree}</h3>
      </div>
    </ColumnContainer>
  );
};
export default FunFacts;

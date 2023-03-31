import React from "react";
import { ColumnContainer } from "../../styled-components/Containers";

const HomeText = () => {
  return (
    <div>
      <ColumnContainer border={true} className="single-planet-info">
        <h1>Welcome Traveller!</h1>
        <h2>You've reached the intergalactic home of W.E.L.P.</h2>
        <h2>We 'Effing Love Planets</h2>
        <h3>
          Your mission is simple: Explore the remaining planets in this galaxy
          and report back on where to set up our new homebase!
        </h3>
        <h3>Be careful out there!</h3>
      </ColumnContainer>
    </div>
  );
};

export default HomeText;

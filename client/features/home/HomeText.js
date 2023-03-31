import React from "react";
import { ColumnContainer } from "../../styled-components/Containers";
import { TypewriterText } from "../../styled-components/TypewriterText";

const HomeText = () => {
  return (
    <div>
      <ColumnContainer border={false} className="home-text" margin="0 2vw 0 0">
        <h1>Welcome Traveller!</h1>
        <h2>You've reached the intergalactic home of W.E.L.P.</h2>
        <TypewriterText>
          <h2>We 'Effing Love Planets</h2>
        </TypewriterText>
        <h3>Your mission is simple: </h3>
        <h3>
          Explore the remaining planets in this galaxy and report back on where
          to set up our new homebase!
        </h3>
        <h3>Be careful out there!</h3>
      </ColumnContainer>
    </div>
  );
};

export default HomeText;

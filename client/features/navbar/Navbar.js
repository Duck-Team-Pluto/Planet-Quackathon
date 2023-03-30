import React from "react";
import { RowContainer } from "../../styled-components/Containers";
import SpaceLink from "../../styled-components/SpaceLink";

const Navbar = () => {
  return (
    <div>
      <nav>

          <SpaceLink to={`/home/`} text='Home' />

      </nav>
    </div>
  );
};

export default Navbar;

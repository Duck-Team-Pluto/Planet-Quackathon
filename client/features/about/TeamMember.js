import React from "react";
import SpaceLink from "../../styled-components/SpaceLink";

const TeamMember = (props) => {
  const { name, bio, imageLink, gitLink, linkedIn } = props.person;

  return (
    <div className='teamMember'>
      <div>
        <h2>{name}</h2>
        <p> {bio} </p>
        <span>
          <SpaceLink to={gitLink} text='Github' />
          <SpaceLink to={linkedIn} text='LinkedIn' />
        </span>
        {/* note: replace with icons? */}
      </div>
      <div>
        <img
          alt='Image of the developer wearing an astronaut helmet'
          src={imageLink}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default TeamMember;

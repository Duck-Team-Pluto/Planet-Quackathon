import React from "react";

const TeamMember = (props) => {
  const { name, bio, imageLink, gitLink, linkedIn } = props.person;

  return (
    <div>
      <div>
        <h2>{name}</h2>
        <img
          alt='Image of the developer wearing an astronaut helmet'
          src={imageLink}
          width={300}
          height={300}
        />
      </div>
      <div>
        <p> {bio} </p>
      </div>
      <div>
        <a href={gitLink}>Github Profile </a>
        <a href={linkedIn}>LinkedIn</a>
        {/* note: replace with icons? */}
      </div>
    </div>
  );
};

export default TeamMember;

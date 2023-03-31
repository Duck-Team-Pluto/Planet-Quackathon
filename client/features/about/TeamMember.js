import React from "react";

const TeamMember = (props) => {
  const { name, bio, imageLink, gitLink, linkedIn } = props.person;

  return (
    <div className="teamMember">
      <div>
        <h2>{name}</h2>
        <p> {bio} </p>
        <p>
          <a className="about-a" href={gitLink}>
            Github Profile |{" "}
          </a>
          <a className="about-a" href={linkedIn}>
            LinkedIn
          </a>
        </p>
        {/* note: replace with icons? */}
      </div>
      <div>
        <img
          alt="Image of the developer wearing an astronaut helmet"
          src={imageLink}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default TeamMember;

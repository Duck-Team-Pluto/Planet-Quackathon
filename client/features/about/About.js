import React from "react";
import { aboutProject, aboutTeam } from "./aboutInfo";
import TeamMember from "./TeamMember";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>{aboutProject}</p>
      <div>
        {aboutTeam.map((person) => (
          <TeamMember key={person.name} person={person} />
        ))}
      </div>
    </>
  );
};

export default About;

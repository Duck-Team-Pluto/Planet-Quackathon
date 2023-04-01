import React from "react";
import { aboutProject, aboutTeam } from "./aboutInfo";
import TeamMember from "./TeamMember";
import SpaceLink from "../../styled-components/SpaceLink";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>{aboutProject}</p>
      <p>
        <SpaceLink
          to='https://github.com/Duck-Team-Pluto/Planet-Quackathon'
          text='Github Repository'
        />
      </p>
      <div className='team'>
        {aboutTeam.map((person) => (
          <TeamMember key={person.name} person={person} />
        ))}
      </div>
    </>
  );
};

export default About;

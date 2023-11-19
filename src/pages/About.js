import React from "react";
import Aboutchurch from "../components/Aboutchurch";
import Description from "../components/Description";
import NavContact from "../components/NavContact";
import NavAbout from "../components/NavAbout";

function About() {
  return (
    <div>
      <NavAbout />
      <Aboutchurch />
      <Description />
    </div>
  );
}

export default About;

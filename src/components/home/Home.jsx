import React from "react";
import Hero from "./Hero";
import Menu from "../menu/Menu";
import AboutMe from "./AboutMe";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

function Home() {
  return (
    <main className="w-full">
      {/* <Menu /> */}
      <Hero />
      <AboutMe/>
      <Skill/>
      <Project/>
      <Contact/>
    </main>
  );
}

export default Home;

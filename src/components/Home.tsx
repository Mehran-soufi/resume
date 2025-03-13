import React from "react";
import HeroSection from "./Hero";
import About from "./About";
import Skill from "./Skill";
import Service from "./Service";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";

export type idType = {
  id: string;
};

function HomeComponent() {
  return (
    <section className="w-full relative">
      <Header />
      <HeroSection  />
      <About id="about" />
      <Skill id="skills" />
      <Service id="services" />
      <Project id="projects" />
      <Contact id="contact" />
      <Footer />
    </section>
  );
}

export default HomeComponent;

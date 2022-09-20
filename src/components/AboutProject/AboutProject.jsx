import React from "react";
import Container from "../Container/Container";
import TextCard from "../TextCard/TextCard";
import Roadmap from "../Roadmap/Roadmap";
import Title from "../Title/Title";
import { diplomaTextCards } from "../../utils/constants";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <Container modifier="container_type_landing">
      <section className="about" id="about">
        <Title title="О проекте" />
        <div className="about__cards">
          {
              diplomaTextCards.map((card, index) => (
            <TextCard key={index} {...card} />
          ))
          }
        </div>
        <Roadmap />
      </section>
    </Container>
  );
};

export default AboutProject;

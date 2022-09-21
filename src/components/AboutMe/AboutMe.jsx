import React from "react";

import Title from "../Title/Title";
import Container from "../Container/Container";
import Link from "../Link/Link";
import Project from "../Project/Project";
import photo from "../../images/avatar.jpeg";
import { socialLinks, projects } from "../../utils/constants";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <Container modifier="container_type_landing">
      <section className="about-me main__about-me" id="student">
        <Title title="Студент" />
        <div className="student about-me__student">
          <div className="student__information">
            <div className="student__text-wrapper">
              <h3 className="student__name">Максим</h3>
              <p className="student__about">
                Фронтенд-разработчик, 26 лет
              </p>
              <p className="student__description">
                Развиваюсь в стеке TypeScript, React и Redux. Готов к изучению Vue, Angular и React Native.
              </p>
            </div>
            <ul className="student__socials">
              {
                socialLinks.map((link, index) => (
                <Link key={index} {...link} />
              ))
              }
            </ul>
          </div>
          <img className="student__photo" src={photo} alt="Максим" />
        </div>
        <div className="portfolio">
          <h3 className="portfolio__title">Портфолио</h3>
          <ul className="portfolio__projects">
            {
              projects.map((project, index) => (
              <Project key={index} {...project} />
            ))
            }
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default AboutMe;

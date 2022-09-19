import "./aboutMe.scss"
import avatar from "../../images/avatar.jpeg"
import {IconButton} from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

const AboutMe = () => {
    const socials = [{name: "GitHub", link: "https://github.com/kejjero"}]
    const projects = [
        {name: "АкроМебель", link: "https://github.com/arco-furniture/arco-furniture"},
        {name: "Марсик", link: "https://github.com/kejjero/mars-food"},
        {name: "Mesto", link: "https://github.com/kejjero/react-mesto-api-full"}
    ]

    return (
        <section className="aboutMe" id="aboutMe">
            <div className="aboutMe__wrapper container">
                <h2 className="title">Студент</h2>
                <div className="aboutMe__student">
                    <div className="aboutMe__container">
                        <div className="aboutMe__student-info">
                            <h3 className="aboutMe__name">Максим</h3>
                            <p className="aboutMe__about">Фронтенд-разработчик, 26 лет</p>
                            <p className="aboutMe__description">
                                Развиваюсь в стеке TypeScript, React и Redux. Готов к изучению Vue, Angular и
                                React Native.
                            </p>
                        </div>
                        <ul className="aboutMe__socials">
                            {
                                socials.map((item, index) => (
                                    <li key={index} className="aboutMe__social">
                                        <a
                                            className="aboutMe__link"
                                            href={item.link}
                                            target="_blank"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <img className="aboutMe__avatar" src={avatar} alt="Аватар"/>
                </div>
                <article className="portfolio">
                    <h3 className="portfolio__subtitle">Портфолио</h3>
                    <ul className="portfolio__projects">
                        {
                            projects.map((item, index) => (
                                <li key={index} className="portfolio__project">
                                    <a className="portfolio__project-link"
                                       href={item.link}
                                       target="_blank"
                                    >
                                        {item.name}
                                        <IconButton>
                                            <CallMadeIcon style={{color: "#000"}}/>
                                        </IconButton>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default AboutMe;
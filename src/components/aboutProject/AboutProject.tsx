import "./aboutProject.scss"

const AboutProject = () => {
    return (
        <section className="aboutProject" id="aboutProject">
            <div className="aboutProject__wrapper container">
                <h2 className="title">О проекте</h2>
                <ul className="aboutProject__columns">
                    <li className="aboutProject__column">
                        <h3 className="aboutProject__title">Дипломный проект включал 5 этапов</h3>
                        <p className="aboutProject__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление
                            функциональности и финальные
                            доработки.
                        </p>
                    </li>
                    <li className="aboutProject__column">
                        <h3 className="aboutProject__title">На выполнение диплома ушло 5 недель</h3>
                        <p className="aboutProject__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                            защититься.
                        </p>
                    </li>
                </ul>
                <div className="aboutProject__roadmap">
                    <div className="aboutProject__backend">
                        <div className="aboutProject__progress aboutProject__progress_green">
                            <div className="aboutProject__week">1 неделя</div>
                        </div>
                        <p className="aboutProject__service">Back-end</p>
                    </div>
                    <div className="aboutProject__frontend">
                        <div className="aboutProject__progress">
                            <div className="aboutProject__week">4 недели</div>
                        </div>
                        <p className="aboutProject__service">Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;
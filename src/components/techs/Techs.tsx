import "./techs.scss"

const Techs = () => {
    const skills = [
        {skill: "HTML"},
        {skill: "CSS"},
        {skill: "JS"},
        {skill: "React"},
        {skill: "Git"},
        {skill: "Express.js"},
        {skill: "mongoDB"},
    ]

    return (
        <section className="techs" id="techs">
            <div className="techs__wrapper container">
                <h2 className="title">Технологии</h2>
                <div className="techs__content">
                    <div className="techs__text">
                        <h3 className="techs__title">7 технологий</h3>
                        <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в
                            дипломном проекте.</p>
                    </div>
                    <ul className="techs__skills">
                        {
                            skills.map((item, index) => (
                                <li key={index} className="techs__skill">{item.skill}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Techs;
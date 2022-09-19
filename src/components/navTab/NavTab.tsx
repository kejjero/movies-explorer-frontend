import "./navTab.scss"

const NavTab = () => {
    const tabs = [
        {tab: "О проекте", link: "#aboutProject"},
        {tab: "Технологии", link: "#techs"},
        {tab: "Студент", link: "#aboutMe"}
    ]

    return(
        <nav className="navTab">
            {
                tabs.map((item, index) => (
                    <a key={index} className="navTab__tab" href={item.link}>{item.tab}</a>
                ))
            }
        </nav>
    )
}

export default NavTab;
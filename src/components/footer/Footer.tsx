import "./footer.scss"

const Footer = () => {
    const links = [
        {name: "Яндекс.Практикум", link: "https://practicum.yandex.ru"},
        {name: "Github", link: "https://github.com/kejjero"},
    ]

    return(
        <footer className="footer">
            <div className="footer__wrapper container">
                <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__background">
                    <p className="footer__year">&copy; 2022</p>
                    <div className="footer__links">
                        {
                            links.map((item, index) => (
                                <a
                                    key={index}
                                    className="footer__link"
                                    href={item.link}
                                >
                                    {item.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
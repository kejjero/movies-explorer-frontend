import logo from "../../images/logo.svg"
import {Navigation} from "../index"
import {Link} from "react-router-dom"
import "./header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper container">
                <Link to="/">
                    <img className="header__logo" src={logo} alt="логотип"/>
                </Link>
                <Navigation/>
            </div>
        </header>
    )
}

export default Header;
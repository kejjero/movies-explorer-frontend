import React, {useState} from "react";
import {NavLink, Link, useLocation} from "react-router-dom";
import Icons from "../Icons";
import Button from "../Button/Button";
import Container from "../Container/Container";
import AccountButton from "../AccountButton/AccountButton";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const isLoggedIn = true;
    const isLocation = useLocation()

    const sidebarHandler = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <Container>
            <header className="header app__header">
                <Link className="header__linked-logo" to="/">
                    <Logo className="logo header__logo" />
                </Link>
                <div className="header__wrapper">
                    <nav className="header__nav">
                        {
                            isLocation.pathname !== '/' &&
                            <div className="header__links">
                                <NavLink
                                    className="header__link"
                                    activeClassName="header__link_active"
                                    to="/movies"
                                >
                                    Фильмы
                                </NavLink>
                                <NavLink
                                    className="header__link"
                                    activeClassName="header__link_active"
                                    to="/saved-movies"
                                >
                                    Сохраненные фильмы
                                </NavLink>
                            </div>
                        }
                        <div className="header__account-menu">
                            {isLoggedIn ? (

                                window.screen.width > 1280 &&
                                <Link className="header__linked-button" to="/profile">
                                    <AccountButton modifier="button_type_account" />
                                </Link>
                            ) : (
                                <>
                                    <Link to="/signup">
                                        <Button className="button_type_header button_type_white-text">
                                            Регистрация
                                        </Button>
                                    </Link>
                                    <Link to="/signin">
                                        <Button className="button_type_header button_type_green">
                                            Войти
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                        {isLoggedIn && (
                            <Icons.Burger
                                className="header__burger-icon"
                                handler={sidebarHandler}
                            />
                        )}
                    </nav>

                </div>
                <Sidebar isOpen={isSidebarOpen} closeHandler={sidebarHandler} />
            </header>
        </Container>
    );
};

export default Header;

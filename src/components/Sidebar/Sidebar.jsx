import React from "react";
import {NavLink, Link, useLocation} from "react-router-dom";

import AccountButton from "../AccountButton/AccountButton";
import Icons from "../Icons/";
import "./Sidebar.css";

const Sidebar = ({ isOpen, closeHandler }) => {
  const location = useLocation();

  return (
      <div className={`app__overlay ${isOpen ? "app__overlay_visible" : ""}`}>
      <div
          className={`sidebar ${isOpen ? "sidebar_visible" : "sidebar_hidden"}`}
      >
        <nav className="sidebar__links">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link_active"
            to="/"
            exact
          >
            Главная
          </NavLink>
          {
              location.pathname !== "/" &&
            <>
              <NavLink
                  className="sidebar__link"
                  activeClassName="sidebar__link_active"
                  to="/movies"
              >
                Фильмы
              </NavLink>
              <NavLink
                  className="sidebar__link"
                  activeClassName="sidebar__link_active"
                  to="saved-movies"
              >
                Сохранённые фильмы
              </NavLink>
            </>
          }
        </nav>
        <Link className="sidebar__linked-button" to="/profile">
          <AccountButton />
        </Link>
        <Icons.Close className="sidebar__close-icon"  handler={closeHandler} />
      </div>
    </div>
  );
};

export default Sidebar;

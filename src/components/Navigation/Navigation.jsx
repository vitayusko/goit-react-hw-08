import React from "react";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.wrapper}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.navItems}>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
        </ul>
        <ul className={s.list}>
          <li className={s.navItems}>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
          </li>
          <li className={s.navItems}>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

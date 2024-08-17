import React from "react";
import clsx from "clsx";
import s from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const AuthNav = () => (
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
);

export default AuthNav;

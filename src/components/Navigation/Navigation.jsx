import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={s.wrapper}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.navItems}>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className={s.navItems}>
              <NavLink className={buildLinkClass} to="/contacts">
                Contacts
              </NavLink>
            </li>
          )}
        </ul>

        {isLoggedIn ? <UserMenu user={user} /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default Navigation;

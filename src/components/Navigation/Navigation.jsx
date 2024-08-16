import React from "react";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logOutThunk } from "../../redux/auth/operations";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();
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

        {!isLoggedIn && (
          <>
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
          </>
        )}

        {isLoggedIn && (
          <ul className={s.list}>
            <li className={s.navItems}>
              <h3 className={s.welcomeText}>Welcome, {user.email}</h3>
            </li>
            <li className={s.navItems}>
              <button className={s.btn} onClick={() => dispatch(logOutThunk())}>
                Log Out
              </button>{" "}
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navigation;

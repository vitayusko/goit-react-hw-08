import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      <li className={s.navItems}>
        <h3 className={s.welcomeText}>Welcome, {user.email}</h3>
      </li>
      <li className={s.navItems}>
        <button className={s.btn} onClick={() => dispatch(logOutThunk())}>
          Log Out
        </button>
      </li>
    </ul>
  );
};

export default UserMenu;

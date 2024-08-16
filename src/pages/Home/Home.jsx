import React from "react";
// import ContactList from "../../components/ContactList/ContactList";
import Contacts from "../Contacts/Contacts";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.wrapper}>
      <Contacts />
    </div>
  );
};

export default Home;

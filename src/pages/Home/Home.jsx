import React from "react";
// import ContactList from "../../components/ContactList/ContactList";
import Contacts from "../Contacts/Contacts";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.wrapper}>
      <h1>Welcome to your contacts book!</h1>
    </div>
  );
};

export default Home;

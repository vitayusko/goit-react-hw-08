import React from "react";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import s from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default Contacts;

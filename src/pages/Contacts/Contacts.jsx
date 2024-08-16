import React from "react";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contacts = () => {
  return (
    <div>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default Contacts;

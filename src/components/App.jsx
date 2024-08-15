import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Routes>
        <Route path="/" element={<Layout />}>
          {" "}
        </Route>
      </Routes>
    </main>
  );
};

export default App;

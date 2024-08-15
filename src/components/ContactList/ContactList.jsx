import React, { useEffect } from "react";
import Contact from "./Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filter/selectors";

const ContactList = () => {
  const isLoading = useSelector(selectLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <h1>IS LOADING...</h1>}
      <div className={s.contactList}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((item) => (
            <Contact
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
            />
          ))
        ) : (
          <h1>NO DATA RECEIVED</h1>
        )}
      </div>
    </>
  );
};

export default ContactList;

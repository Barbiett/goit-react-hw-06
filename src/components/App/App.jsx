import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";
import css from "./App.module.css";

import * as Yup from "yup";
const UserSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, "Too Short")
    .max(50, "Max 50 letters!")
    .required("Is required"),
  usernumber: Yup.string()
    .min(3, "Min 3 numbers!")
    .matches(/^\d{1,50}$/, "Max 50 numbers!")
    .max(50, "Max 50 numbers!")
    .required("Is required!"),
});
const contactsList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
const localStorageKey = "saved-contacts";

export default function App() {
  const initContacts = () => {
    const lsData = JSON.parse(localStorage.getItem(localStorageKey));
    if (lsData) return lsData;
    return contactsList;
  };
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts)), [contacts];
  });

  const [contacts, setContacts] = useState(initContacts);
  const [filter, setFilter] = useState("");

  function addContact(newContact) {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  }
  function deleteContact(contactId) {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  }
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm UserSchema={UserSchema} addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </div>
  );
}

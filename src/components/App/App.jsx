import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

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

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm UserSchema={UserSchema} />
      <SearchBox />
      <ContactList />
    </div>
  );
}

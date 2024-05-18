import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact
          deleteContact={deleteContact}
          contact={contact}
          key={contact.id}
        />
      ))}
    </ul>
  );
}

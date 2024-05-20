import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <li style={{ listStyle: "none" }}>
      <div className={css.listItem}>
        <div className={css.info}>
          <p>
            <FaUser style={{ paddingRight: "20px" }} />
            {name}
          </p>
          <p>
            <FaPhoneAlt style={{ paddingRight: "20px" }} />
            {number}
          </p>
          <a href={`tel:+${number}`}></a>
        </div>
        <button
          className={css.button}
          id={id}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

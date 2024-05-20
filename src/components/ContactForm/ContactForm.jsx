import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";

export default function ContactForm({ UserSchema }) {
  const dispatch = useDispatch();
  const userNameId = useId();
  const userNamumberId = useId();
  const idLength = 10;
  const prefix = "user_";
  const randomId = nanoid(idLength);
  const prefixedId = prefix + randomId;

  function handleSubmit(values, actions) {
    const { username: name, usernumber: number } = values;
    const newContact = { name, number, prefixedId };
    dispatch(addContact(newContact));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{
        username: "",
        usernumber: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={css.input}>
          <label className={css.label} htmlFor={userNameId}>
            Name
          </label>
          <Field className={css.field} name="username" id={userNameId}></Field>
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div className={css.input}>
          <label className={css.label} htmlFor={userNamumberId}>
            Number
          </label>
          <Field
            className={css.field}
            name="usernumber"
            type="number"
            id={userNamumberId}
          ></Field>
          <ErrorMessage
            className={css.error}
            name="usernumber"
            component="span"
          />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

import { Form, Formik, Field } from "formik";
import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  const userNameIdSearcBox = useId();
  return (
    <Formik
      initialValues={{
        username: "",
      }}
    >
      <Form>
        <div className={css.form}>
          <label htmlFor={userNameIdSearcBox}>Find contacts by name</label>
          <Field
            className={css.field}
            name="username"
            id={userNameIdSearcBox}
            value={value}
            onChange={(event) => onFilter(event.target.value)}
          ></Field>
        </div>
      </Form>
    </Formik>
  );
}

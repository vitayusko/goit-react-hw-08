import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import s from "./Register.module.css";
import { registerThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="name"
            placeholder="Enter your name"
            className={s.input}
          />
          <Field
            name="email"
            placeholder="Enter your email"
            className={s.input}
          />
          <Field
            name="password"
            placeholder="Enter your password"
            className={s.input}
          />
          <button type="submit" className={s.btn}>
            Registration
          </button>
          <p>
            You already have an account <Link to="/login">Sign In</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;

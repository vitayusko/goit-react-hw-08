import { Field, Form, Formik } from "formik";
import React from "react";
import s from "./Login.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    console.log(values);
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
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
            Login
          </button>
          <p>
            You don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;

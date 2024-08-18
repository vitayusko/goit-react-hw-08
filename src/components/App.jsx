import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contacts from "../pages/Contacts/Contacts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { getMeThunk } from "../redux/auth/operations";
import { PrivateRoute } from "../routes/PrivateRoute";
import { PublicRoute } from "../routes/PublicRote";
import { selectIsRefreshing } from "../redux/auth/selectors";
import Layout from "./Layout";
// import Navigation from "./Navigation/Navigation";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

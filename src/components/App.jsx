import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "./Layout";
import Contacts from "../pages/Contacts/Contacts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { getMeThunk } from "../redux/auth/operations";
import { PrivateRoute } from "../routes/PrivateRoute";
import { PublicRoute } from "../routes/PublicRote";
import { selectIsRefreshing } from "../redux/auth/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // useEffect(() => {
  //   dispatch(getMeThunk()), [dispatch];
  // });
  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          {/* <Route path="contacts" element={<Contacts />} /> */}
        </Route>
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
      </Routes>
    </main>
  );
};

export default App;

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Contacts from "./pages/Contacts";

import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <p>Loading...</p>;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<Registration />}
              redirectTo="/contacts"
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
      </Routes>
    </Layout>
  );
}

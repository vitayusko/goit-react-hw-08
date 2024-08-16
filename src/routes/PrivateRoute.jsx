import { useSelector } from "react-redux";
import { selectLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
};

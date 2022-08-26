import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.AuthReudcer.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: "" }} replace />;
  }

  return children;
};

export default ReqAuth;

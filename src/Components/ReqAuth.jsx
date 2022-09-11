import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/in/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ReqAuth;

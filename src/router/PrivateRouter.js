import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user= sessionStorage.getItem("userInfo")

  return user ? <Outlet /> : <Navigate to="/login" replace/>;
};

export default PrivateRouter;
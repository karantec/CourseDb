import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/check"); // backend will verify session
        setAuth(true);
      } catch (err) {
        setAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (auth === null) return <p>Loading...</p>;

  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

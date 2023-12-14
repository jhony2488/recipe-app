import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

export default function Logout() {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/login");
  }, [navigate]);
  return <div>loading...</div>;
}

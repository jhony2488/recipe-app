import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

export default function Logout() {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("emailAuthUser");
    localStorage.removeItem("AuthUserId");
    setUser(null);
    navigate("/login");
    location.reload();
  }, [navigate]);
  return <div>loading...</div>;
}

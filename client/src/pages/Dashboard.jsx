import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import UserService from "../services/UserService";

export default function Dashboard() {
  const { user, setUser } = useAuthContext();

  useEffect(() => {
    UserService.verify()
      .then((resp) => setUser(resp.data))
      .catch((err) => console.error(err));
  }, [setUser]);

  return <div> {user?.email} </div>;
}

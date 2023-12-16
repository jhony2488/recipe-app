import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import UserService from "../services/UserService";

export default function Dashboard() {
  const { setUser } = useAuthContext();

  useEffect(() => {
    UserService.verify()
      .then((resp) => setUser(resp.data))
      .catch((err) => console.error(err));
  }, [setUser]);

  return <div style={{height: '100vh'}}> 
  <h1 style={{textAlign: 'center'}}>Dashoboard</h1>
   </div>;
}

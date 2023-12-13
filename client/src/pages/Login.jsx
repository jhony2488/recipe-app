import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(email, password); // Use the login function from UserContext
      localStorage.setItem("authToken", response.data.authToken);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Failed to login");
      console.error(error);
    }
  };
  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
      </Form>
    </Container>
  );
}

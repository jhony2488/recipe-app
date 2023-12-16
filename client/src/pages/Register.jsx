import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.register(username, email, password);
      console.log(response);
      navigate("/login");
    } catch (error) {
      setErrorMessage("Failed to signup");
      console.error(error);
    }
  };
  return (
    <Container>
      <h2 style={{ fontSize: '32px','text-align': 'center', marginTop: '30px',marginBottom: '32px' }}>Sign Up</h2>
      <Form onSubmit={handleSignup} style={{ display: "grid", gap: '12px', justifyItems: 'center', marginBottom:'32px' }}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

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

        <Button style={{ marginTop:'16px', width: '200px', borderRadius: '5px'  }}  variant="primary" type="submit">
          Sign Up
        </Button>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
      </Form>
    </Container>
  );
}

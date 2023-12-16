import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import AuthService from "../services/AuthService";
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isMobile = useMediaQuery({
    query: '(max-width: 400px)'
    })
    const isMobile300 = useMediaQuery({
      query: '(max-width: 340px)'
      })

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("authToken", response.data.authToken);
      localStorage.setItem("emailAuthUser", response.data.email);
      localStorage.setItem("AuthUserId", response.data._id);
      navigate("/dashboard");
      location.reload();
    } catch (error) {
      setErrorMessage("Failed to login");
      console.error(error);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: isMobile ? isMobile300 ? "280px" : "300px" : "400px" }} className="p-4">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

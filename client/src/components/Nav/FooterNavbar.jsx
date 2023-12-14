import { Container, Row, Col } from "react-bootstrap";

export default function FooterNavbar() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Recipe App</h5>
            <p>
              Recipe App is a platform for sharing and discovering delicious
              recipes from around the world. Join our community of food
              enthusiasts!
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: contact@recipeapp.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>
              Stay connected with us on social media for the latest updates and
              recipes.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>© 2023 Recipe App, Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

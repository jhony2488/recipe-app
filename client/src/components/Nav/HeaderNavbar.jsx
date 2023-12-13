import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useAuthContext } from "../../context/AuthContext";
export default function HeaderNavbar() {
  const userElements = [
    {
      to: "/",
      title: "Recipe App",
    },
    {
      to: "/dashboard",
      title: "Dashboard",
    },
    {
      to: "/logout",
      title: "Logout",
    },
  ];

  const guestElements = [
    {
      to: "/",
      title: "Recipe App",
    },
    {
      to: "/register",
      title: "Register",
    },
    {
      to: "/login",
      title: "Login",
    },
  ];

  const { user } = useAuthContext();
  console.log("user:", user);
  if (user) {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {userElements.map((e, i) => (
              <Nav.Link key={i} as={Link} to={e.to}>
                {e.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {guestElements.map((e, i) => (
            <Nav.Link key={i} as={Link} to={e.to}>
              {e.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

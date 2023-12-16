// import { Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
// import { useAuthContext } from "../../context/AuthContext";
// export default function HeaderNavbar() {
//   const userElements = [
//     {
//       to: "/",
//       title: "Recipe App",
//     },
//     {
//       to: "/dashboard",
//       title: "Dashboard",
//     },
//     {
//       to: "/logout",
//       title: "Logout",
//     },
//   ];

//   const guestElements = [
//     {
//       to: "/",
//       title: "Recipe App",
//     },
//     {
//       to: "/register",
//       title: "Register",
//     },
//     {
//       to: "/login",
//       title: "Login",
//     },
//   ];

//   const { user } = useAuthContext();
//   console.log("user:", user);
//   if (user) {
//     return (
//       <Navbar bg="light" expand="lg">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {userElements.map((e, i) => (
//               <Nav.Link key={i} as={Link} to={e.to}>
//                 {e.title}
//               </Nav.Link>
//             ))}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   }
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           {guestElements.map((e, i) => (
//             <Nav.Link key={i} as={Link} to={e.to}>
//               {e.title}
//             </Nav.Link>
//           ))}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
//import { useAuthContext } from "../../context/AuthContext";


export default function HeaderNavbar() {
  const userElements = [
    { to: "/", title: "Recipe App" },
    { to: "/dashboard", title: "Dashboard" },
    { to: "/recipes", title: "Recipes" },
    { to: "/logout", title: "Logout" }
  ];

  const guestElements = [
    { to: "/", title: "Recipe App" },
    { to: "/recipes", title: "Recipes" },
    { to: "/register", title: "Register" },
    { to: "/login", title: "Login" }
  ];

  const idUser = localStorage.getItem("AuthUserId");

  return (
    <Navbar bg="dark" style={{width: "100vw",}} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Recipe App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {(idUser ? userElements : guestElements).map((e, i) => (
              <Nav.Link
                key={i}
                as={Link}
                to={e.to}
                onClick={() => {
                 if(e.title=='Logout'){
                  localStorage.removeItem("AuthUserId");
                  localStorage.removeItem("authToken");
                  localStorage.removeItem("emailAuthUser");
                 }
                }}
              >
                {e.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

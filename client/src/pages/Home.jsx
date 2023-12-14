// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <Container className="py-5">
//       <Link to="/recipe/create">create recipe</Link>
//       <Row className="mb-4">
//         <Col>
//           <h1>Welcome to Recipe App</h1>
//           <p className="lead">
//             Discover and share amazing recipes from around the world.
//           </p>
//         </Col>
//       </Row>

//       <Row></Row>
//         <Col md={6} className="mb-4">
//           <Card className="h-100">
//             <Card.Img variant="top" src="https://via.placeholder.com/500x300" />
//             <Card.Body>
//               <Card.Title>Featured Recipe</Card.Title>
//               <Card.Text>
//                 Explore this week's featured recipe and add a new twist to your
//                 meal plans.
//               </Card.Text>
//               <Button variant="primary">Learn More</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6} className="mb-4">
//           <Card className="h-100">
//             <Card.Img variant="top" src="https://via.placeholder.com/500x300" />
//             <Card.Body>
//               <Card.Title>Join Our Community</Card.Title>
//               <Card.Text>
//                 Share your own recipes and connect with food enthusiasts from
//                 around the globe.
//               </Card.Text>
//               <Button variant="primary">Sign Up</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className="py-5">
      <Link to="/recipe/create">create recipe</Link>
      <Row className="mb-4">
        <Col>
          <h1>Welcome to Recipe App</h1>
          <p className="lead">
            Discover and share amazing recipes from around the world.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/500x300" />
            <Card.Body>
              <Card.Title>Featured Recipe</Card.Title>
              <Card.Text>
                Explore this week's featured recipe and add a new twist to your
                meal plans.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/500x300" />
            <Card.Body>
              <Card.Title>Join Our Community</Card.Title>
              <Card.Text>
                Share your own recipes and connect with food enthusiasts from
                around the globe.
              </Card.Text>
              <Button variant="primary">Sign Up</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

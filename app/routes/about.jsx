import { Container, Card, Row, Col } from "react-bootstrap";
// eslint-disable-next-line import/no-unresolved

const About = () => (
  <Container className="justify-content-center mt-3" fluid>
    <Container className="mt-3 px-4">
      <Row className="align-items-center">
        <Col className="d-flex justify-content-left" height={200}>
          <img src="remix.png" width={200} height={200} alt="Remix.run Logo" />
        </Col>
        <Col>
          <h2 className="text-center">Web development is what I excel at.</h2>
          <p className="text-center text-muted">
            I am a recent graduate from Rensselaer Polytechnic Institute and
            current employee of Politech. I graduated with a B.S. in the field
            of Information Technology and Web Science. My skills include
            JavaScript and Elixir development, as well as soft skills such as
            teamwork, a strong work ethic, and critical thinking.
          </p>
        </Col>
      </Row>
    </Container>
    <Container className="mt-3">
      <Card className="mt-3" bg="light">
        <Card.Header>My Work Experience</Card.Header>
        <Card.Body>
          <Card.Title>February 2022-Current</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Politech</Card.Subtitle>
          <Card.Text>Junior Frontend Engineer</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>September 2021-January 2022</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Evolving Software
          </Card.Subtitle>
          <Card.Text>Software Engineer</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>June 2021-August 2021</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            iD Tech Camps
          </Card.Subtitle>
          <Card.Text>iD Certified Instructor</Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-3" bg="light">
        <Card.Header>Education</Card.Header>
        <Card.Body>
          <Card.Title>September 2017 - May 2021</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Rensselaer Polytechnic Institute
          </Card.Subtitle>
          <Card.Text>B.S. in ITWS</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  </Container>
);

export default About;

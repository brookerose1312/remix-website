import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import ProgressiveImage from "react-progressive-graceful-image";

const Home = () => (
    <Container className="justify-content-center mt-3" fluid>
      <Row className="align-items-center">
        <Col>
          <h1 className="text-center">Hi, I&apos;m Brooke!</h1>
          <h5 className="text-muted text-center">
            I&apos;m a web developer who majored in ITWS from RPI in May of
            2021.
          </h5>
        </Col>
        <Col className="d-flex justify-content-center" height={400}>
        <ProgressiveImage
            src="pfp.jpeg"
            placeholder="tiny-pfp.jpg"
        >
          {(src, loading) => <img src={src} style={{ filter: loading ? 'blur(1rem)' : ''}} className="rounded-circle" width={400} height={400} alt="Brooke" />}
        </ProgressiveImage>
        </Col>
      </Row>
      <Container className="mt-3">
        <Card bg="light">
          <Card.Header>Who Am I?</Card.Header>
          <Card.Body>
            <Card.Title>A Developer</Card.Title>
            <Card.Text>
              I am a web developer, primarily working in React, but also
              learning Rust+Wasm, as well as F# and Elixir. My Github is
              available <a href="https://github.com/brookerose1312">here</a>,
              and my LinkedIn is available{" "}
              <a href="https://www.linkedin.com/in/brooke-rose-baer/">here</a>.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title>A Trans Woman</Card.Title>
            <Card.Text>
              I am an openly trans woman, and my pronouns are available{" "}
              <a href="https://en.pronouns.page/@brookerose1312">here</a>.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title>A Humanist</Card.Title>
            <Card.Text>
              It is my personal goal to help as many people as I can.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-3" bg="light">
          <Card.Header>My Github Activity (@brookerose1312)</Card.Header>
          <Card.Body className="d-flex justify-content-center">
            <GitHubCalendar username="brookerose1312" year={2022} />
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );

export default Home;

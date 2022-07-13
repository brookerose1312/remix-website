import { Card, Col, Container, Row } from "react-bootstrap";
import {
  EnvelopeFill,
  Github as GithubIcon,
  MapFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import {
  JOBS,
  LANGUAGES,
  OTHER_INTERESTS,
  SKILLS,
  TECH_INTERESTS,
} from "../constants";
import {
  EmploymentBlock,
  LanguageBlock,
  SkillBlock,
  TimeRange,
} from "../components/ResumeComponents";

const Resume = () => {
  const jobs = JOBS;
  const languages = LANGUAGES;
  const otherInterests = OTHER_INTERESTS;
  const skills = SKILLS;
  const technicalInterests = TECH_INTERESTS;
  return (
    <Container>
      <br />
      <h1>Brooke Rose Baer</h1>
      <h3>Software Engineer</h3>
      <Row xl={4} md={2} xs={1}>
        <Col>
          <EnvelopeFill className="me-2" />
          me@brookero.se
        </Col>
        <Col>
          <TelephoneFill className="me-2" />
          <a href="tel:6102359727">+1 (610) 235-9727</a>
        </Col>
        <Col className="d-flex">
          <div>
            <MapFill className="me-2" />
          </div>
          <div>
            88 Eagle Street, <br />
            Apt. 2 <br />
            Troy, NY, 12180
          </div>
        </Col>
        <Col>
          <GithubIcon className="me-2" />
          <a href="https://github.com/brookerose1312">
            https://github.com/brookerose1312
          </a>
        </Col>
      </Row>
      <Row className="mt-3" lg={2} md={1}>
        <Col>
          <Card bg="light">
            <Card.Header as="h2">Professional Summary</Card.Header>
            <Card.Body>
              <Card.Text>
                Hands-on, successful Software Engineering student. Comprehensive
                knowledge of network programming, operating systems, and web
                development. Experience with top companies in developing
                internal tools to help educate employees on cybersecurity.
                Experience in modern web development using technologies such as
                React with Next.JS, Remix.run, as well as Elixir.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light" className="mt-3">
            <Card.Header as="h2">Employment History</Card.Header>
            {jobs.map((job) => (
              <EmploymentBlock job={job} />
            ))}
          </Card>
          <Card bg="light" className="mt-3 mb-3">
            <Card.Header as="h2">Skills</Card.Header>
            <Card.Body>
              {skills.map((skill) => (
                <SkillBlock skill={skill} />
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="light">
            <Card.Header as="h2">Education</Card.Header>
            <Card.Body>
              <Card.Title>
                BS in Information Technology and Web Science
              </Card.Title>
              <Card.Subtitle className="text-muted">
                Rensselaer Polytechnic Institute
              </Card.Subtitle>
              <Card.Text>
                <TimeRange start="August 2017" end="June 2021" />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3" bg="light">
            <Card.Header as="h2">Interests</Card.Header>
            <Card.Body>
              <Card.Title>Technical</Card.Title>
              <Card.Text>
                <ul>
                  {technicalInterests.map((interest) => (
                    <li key={interest}>{interest}</li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>Other</Card.Title>
              <Card.Text>
                <ul>
                  {otherInterests.map((interest) => (
                    <li key={interest}>{interest}</li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3" bg="light">
            <Card.Header as="h2">Languages</Card.Header>
            <Card.Body>
              {languages.map((language) => (
                <LanguageBlock language={language} />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;

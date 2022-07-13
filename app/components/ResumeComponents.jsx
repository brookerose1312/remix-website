import { Card } from "react-bootstrap";
import {
  CalendarFill,
  Circle,
  CircleFill,
  GeoAltFill,
} from "react-bootstrap-icons";

// smaller blocks

const Location = ({ place }) => (
  <div>
    <GeoAltFill className="me-2" />
    {place}
  </div>
);

const Proficiency = ({ score }) => {
  const circleScore = [];
  for (let i = 0; i < score; i += 1) {
    circleScore.push(<CircleFill key={i} />);
  }
  for (let i = score; i < 5; i += 1) {
    circleScore.push(<Circle key={i} />);
  }
  return <div>{circleScore}</div>;
};

export const TimeRange = ({ start, end }) => (
  <div>
    <CalendarFill className="me-2" />
    {start} - {end}
  </div>
);

// form blocks

export const EmploymentBlock = ({ job }) => {
  const { jobTitle, company, startDate, endDate, location, copy } = job;
  return (
    <Card.Body key={jobTitle}>
      <Card.Title>{jobTitle}</Card.Title>
      <Card.Subtitle className="text-muted">{company}</Card.Subtitle>
      <div className="d-flex justify-content-between">
        <TimeRange start={startDate} end={endDate} />
        <Location place={location} />
      </div>
      <Card.Text>{copy}</Card.Text>
    </Card.Body>
  );
};

export const LanguageBlock = ({ language }) => {
  const { name, score } = language;
  return (
    <div className="d-flex justify-content-between" key={name}>
      {name} <Proficiency score={score} />
    </div>
  );
};

export const SkillBlock = ({ skill }) => {
  const { name, score } = skill;
  return (
    <div className="d-flex justify-content-between" key={name}>
      {name} <Proficiency score={score} />
    </div>
  );
};

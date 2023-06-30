import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ganesh Mamidipaka </span>
            from <span className="purple"> Gujarat, India.</span>
            <br /> I am a final year student pursuing in B.tech
            in CSE at Parul university.
          
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing with linux tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading About New Technologies          
            </li>
            <li className="about-activity">
              <ImPointRight /> I love Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You will face many defeats in life, but never let yourself be defeated."{" "}
          </p>
          <footer className="blockquote-footer">Ganesh Mamidipaka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
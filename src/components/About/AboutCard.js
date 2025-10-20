import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Roshan Leanage</span>{" "}
            from <span className="purple">Melbourne, Australia</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Data Analyst</span> at{" "}
            <span className="purple">Zirco Data</span>.
            <br />My interests are in{" "}
            <span className="purple">Developing AI agents, LLM integration, Web Development, Data Analysis</span> from{" "}
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

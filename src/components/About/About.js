import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import googleCert from "../../Assets/google-it-automation.jpg";
import ibmCert from "../../Assets/IBM.jpg";
import awsCert from "../../Assets/Roshan AWS.jpg";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            Qualifications <strong className="purple">Summary</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={12} md={4} className="tech-icons">
                <img src={googleCert} alt="Google IT Automation" className="img-fluid" />
            </Col>
            <Col xs={12} md={4} className="tech-icons">
              
                <img src={ibmCert} alt="IBM Data-Science" className="img-fluid" />
            </Col>
            <Col xs={12} md={4} className="tech-icons">
              <img src={awsCert} alt="AWS Cloud Practitioner" className="img-fluid" />
            </Col>
          </Row>

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;

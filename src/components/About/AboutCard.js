import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gokulakrishnan </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            I am a cybersecurity student and a passionate full-stack developer.
            <br />
            I am currently Intern as a software developer at Enliten academy working on innovative project, including AI-driven applications for TNPSC and some other my previous projects are blockchain-based Certificate generation and authentication, and experience on working with cybersecurity tools.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Cybersecurity
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on AI & Blockchain Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring Juniors in Full Stack Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Secretary of Encryptix deparment association of cyber security MCET
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovate, Secure, and Build for the Future!"{" "}
          </p>
          <footer className="blockquote-footer">Gokulakrishnan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

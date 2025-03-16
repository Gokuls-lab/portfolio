import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cupin from "../../Assets/Projects/cupin.webp";
import chat from "../../Assets/Projects/AiPage.png";
import ai from "../../Assets/Projects/ai.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import book from "../../Assets/Projects/book.jpg";
import Certificate from "../../Assets/Projects/certificate.webp";

import voting from "../../Assets/Projects/voting.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voting}
              isBlog={false}
              title="Facial Recognition-Based Voting System"
              description="A secure voting system using DeepFace and FaceNet for facial recognition. It ensures voter authentication, prevents impersonation, and enhances election security by using AI-driven face-matching techniques."
              ghLink="https://github.com/Gokuls-lab/FacialVote"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Certificate}
              isBlog={false}
              title="Blockchain-Based Certificate Generation & Validation"
              description="A Smart India Hackathon (SIH) 2024 project using Ethereum blockchain and Ganache to securely issue and verify digital certificates. It ensures authenticity and tamper-proof validation, integrating with the Digital Locker System."
              ghLink="#"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cupin}
              isBlog={false}
              title="Cupin - AI Relationship Doctor"
              description="A relationship analysis app using AI to provide insights into conversations. It offers personalized relationship advice, detects patterns, and enhances communication understanding, launched on the Play Store."
              ghLink="#"
              demoLink="https://play.google.com/store/apps/details?id=co.median.android.wjkojk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="AI Voice Assistant"
              description="A hackathon project focused on building an interactive AI voice assistant using OpenAI’s Whisper for speech-to-text, sapi5 for text-to-speech, Gemini API for responses, and Google APIs for language translation and image recognition."
              ghLink="#"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Library Software with AI Search & Raspberry Pi Display"
              description="A library management system featuring an AI-based book search using a CSV dataset. Includes a Raspberry Pi 5-powered display and a 3D model of a moving robot with a screen for easy navigation between bookshelves. It uses Gemini AI api and sentence-transformers/all-MiniLM-L6-v2 for book search"
              ghLink="#"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Enliten Academy"
              description="A TNPSC exam preparation app and website offering AI-powered mock tests, quizzes, and study materials. Built using Vercel, React, Python, and Firebase and JWT authentication it aims to provide an interactive and accessible learning experience with Gen AI 'Heuristic thinking' !!"
              ghLink="https://github.com/abilove10/enliten-academy"
              demoLink="https://enliten.org.in"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
              
              isBlog={false}
              title="spotify-clone"
              description="The personal project of creating a Spotify clone using HTML and CSS involves developing a web application that mimics the look and feel of the popular music streaming platform. By utilizing HTML for structure and CSS for styling, the project aims to replicate key features such as user profiles, song search and playback, playlist creation, and album artwork display. Through this project, you can gain hands-on experience in web development, user interface design, and styling techniques while showcasing your skills in creating a responsive and visually appealing web application that closely resembles Spotify."
              ghLink="https://github.com/Ganii2003/Spotify"
              demoLink="https://spotify-clone-m7l8o88ck-ganii2003.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Windows11 Design"
              description="The personal project of designing a Windows 11 interface using HTML and CSS involves creating a web-based version of the operating system's user interface. By utilizing HTML for structure and CSS for styling, the project aims to replicate the visual elements and layout of Windows 11, including the Start menu, taskbar, window frames, and icons. The focus is on recreating the design aesthetics and responsiveness of the operating system, allowing users to interact with the interface in a familiar and intuitive manner. Through this project, you can gain practical experience in web design, user interface development, and CSS styling while showcasing your ability to recreate the modern and sleek design of Windows 11."
              ghLink="https://github.com/Ganii2003/Windows-11-Design"
        
            />
          </Col>

  

      
          



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
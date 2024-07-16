import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quickshop_compress from "../../Assets/Projects/quickshop_compress.png";
import notes_app_compress from "../../Assets/Projects/notes_app_compress.png";
import movie from "../../Assets/Projects/movie.png";
import weather_compress from "../../Assets/Projects/weather_compress.png";

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
              imgPath={notes_app_compress}
              isBlog={false}
              title="NotesApp"
              description="NotesApp is a dynamic web application providing ->Personalized Notes,Real-Time Updates,Secure Authentication."
              ghLink="https://github.com/anmolraj-029/NotesApp"
              demoLink="https://notesapp-1.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickshop_compress}
              isBlog={false}
              title="Price Comparator"
              description="Users can securely log in and sign up, ensuring data privacy and user-specific functionalities such as email verification and forgot password. It includes Dynamic Price Comparison that efficiently fetches and compares prices(from
3,4 websites) by using google price API."
              ghLink="https://github.com/anmolraj-029/PriceComparator"
              demoLink="https://pricecomparator-1.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Recommender System"
              description="Designed and implemented a Python-based movie recommender system using Scikit-learn and Pandas, focusing on
content-based filtering for accurate recommendations"
              ghLink="https://github.com/anmolraj-029/Movie_Recommender"
              demoLink="https://movie-recommender-36k6.onrender.com"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather_compress}
              isBlog={false}
              title="Weather App"
              description="Implemented robust backend app that seamlessly integrates with weather APIs, delivering accurate and up-to-date
information to users within 5 seconds."
              ghLink="https://github.com/anmolraj-029/WeatherApp_Final"
              demoLink="https://weather-app-w3g0.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

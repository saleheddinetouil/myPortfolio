import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import "./projects.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from './ProjectCard';
// import { client, urlFor } from "../../client"


const Porjects = () => {
  // const [projectData, setProjectData] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Abhishek-Projects"
    // const query = '*[_type=="projects"]'
    // client.fetch(query)
    //   .then((data) => setProjectData(data))
    // console.log(projectData)
  }, [])
  return (
    <Container fluid className="pt-5 mt-5 projects-container">
      <h1 className="heading text-center text-white animated-left">
        My <span className="text-primary">Projects</span> <span className="text-danger"><FontAwesomeIcon icon={faBriefcase} /></span>
      </h1>

      <Container className="projects-cards-container py-3 animated-right">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Container>

    </Container>
  )
}

export default Porjects
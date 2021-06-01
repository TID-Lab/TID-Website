import * as React from "react";
import { Container, Divider, Item, Header } from 'semantic-ui-react'
import FooterBar from "../components/FooterBar";
import NavBar from '../components/NavBar';
import projectsData from "../data/projects.json";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "HelveticaNeue-Light",
  fontSize: "13pt"
}

const headerStyles = {
  fontFamily: "HelveticaNeue-Light",
}

const projectHeaderStyles = {
  fontFamily: "HelveticaNeue-Light",
  color: "#4183c4",
}

const innerContainerStyles = {
  padding: "4em 0"
}


function subProjectJSX (subProjects) {
  if (subProjects) {
    return subProjects.map((subProject)=> {
          return <a key={subProject.name} href={subProject.link}>{subProject.name}</a>
        })
  } else {
    return (
        <></>
    )
  }

}
function projectJSX (project) {
  return (
      <Item key={project.name}>
        <Item.Image size='medium' src={project.image} rounded/>
        <Item.Content>
          <Item.Header style={projectHeaderStyles} href={project.link} as='a'>{project.name}</Item.Header>
          <Item.Description>{project.description}</Item.Description>
          <Item.Extra>
            {subProjectJSX(project.subProjects)}
          </Item.Extra>
        </Item.Content>
      </Item>
  )
}

// Create JSX elements for each project.
const currentProjectDataJSX = []
const pastProjectDataJSX = []
projectsData.currentProjects.forEach((project)=>{
  currentProjectDataJSX.push(projectJSX(project))
})
projectsData.pastProjects.forEach((project)=>{
  pastProjectDataJSX.push(projectJSX(project))
})
// markup
const ProjectsPage = () => {
  return (
      <>
        <NavBar></NavBar>
        <main style={pageStyles}>
          <title>Projects Page</title>
          <Container fluid>
            <Container style={innerContainerStyles} textAlign='left'>
              <Header size='huge' style={headerStyles}>Current Projects</Header>
              <Divider/>
              <Item.Group>
                {currentProjectDataJSX}
              </Item.Group>
              <Header size='huge' style={headerStyles}>Past Projects</Header>
              <Divider/>
              <Item.Group>
                {pastProjectDataJSX}
              </Item.Group>
            </Container>
          </Container>
          <br/>
          <br/>
          <br/>
          <br/>
        </main>
        <FooterBar></FooterBar>
      </>
  )
}

export default ProjectsPage

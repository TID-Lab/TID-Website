import * as React from "react";
import 'semantic-ui-css/semantic.min.css';
import projectsData from '../data/projects.json';
import NavBar from '../components/NavBar';
import FooterBar from "../components/FooterBar";
import {Container, Divider, Grid, Header, Image} from "semantic-ui-react";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "HelveticaNeue-Light",
  fontSize: "13pt"
}

const headerStyles = {
  fontFamily: "HelveticaNeue-Light",
}
const textContainerStyles = {
  backgroundColor: "#e9e9e9"
}

const projectContainerStyles = {
  backgroundColor: "#FFFFFF",
  padding: "4em 0"
}

const innerContainerStyles = {
  padding: "4em 0"
}

// Create JSX elements for each project.
const projectDataJSX = []
projectsData.currentProjects.forEach((project)=>{
  projectDataJSX.push(
      <Grid.Column>
        <Container>
          <Image src={project.image} href={project.link} size='small' floated='left' rounded/>
          <h3>{project.name}</h3>
          <p>{project.shortDescription} <a href={project.link}>See more...</a></p>
        </Container>
      </Grid.Column>
  )
})

// markup
const IndexPage = () => {
  return (
      <>
        <NavBar></NavBar>
        <main style={pageStyles}>
          <title>Projects Page</title>
          <Container fluid style={textContainerStyles}>
            <Container style={innerContainerStyles} textAlign='left'>
              <Header size='huge' style={headerStyles}>About the Lab</Header>
              <Divider/>
              <Image src={"./static/images/aggie_retreat_1.jpeg"} size='large' floated='right' rounded/>
              <p>
                The Technologies and International Development Lab at Georgia Tech researches the practice, the
                promise, and the peril of information and communication technologies (ICTs) in social, economic, and
                political development. We study the risks and rewards of ICT systems for people and communities
                particularly within Africa and Asia. We explore issues of rights and justice in a digital age. And
                we examine new forms for inclusive innovation and social entrepreneurship enhanced through digital
                systems.
              </p>
              <p>
                The T+ID Lab is an interdisciplinary community bringing together computer and social scientists with
                design and policy specialists. We collaborate directly with stakeholders outside of the Lab to
                critique technologies, invent new ones, and research how and why (or why not) ICTs can serve as a
                tool to empower, enrich, and interconnect.
              </p>
              <p>
                <b>Future Lab members:</b> We are always looking to add new members to our team. Georgia Tech students
                (undergraduate to graduate) should contact us if they have a passion to truly impact the world and
                embrace working in inter-disciplinary teams.
              </p>
              <p>
                The T+ID Lab is directed by <a href={"http://ic.gatech.edu/"}>Dr. Michael L. Best</a>, Professor,{' '}
                <a href={"http://inta.gatech.edu/"}>The Sam Nunn School of International Affairs</a> and {' '}
                <a href={"http://ic.gatech.edu/"}>School of Interactive Computing</a>, Georgia Institute of Technology.
              </p>
            </Container>
          </Container>
          <Container fluid style={projectContainerStyles}>
            <Container textAlign='left'>
              <Header size='huge' style={headerStyles}>Projects</Header>
              <Divider/>
              <Grid columns={2}>
                {projectDataJSX}
              </Grid>
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

export default IndexPage

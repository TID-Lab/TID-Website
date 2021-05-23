import * as React from "react";
import 'semantic-ui-css/semantic.min.css';

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

// Define projects in easy to code format. If you would like to add or change a project, simply change these fields.
const projectsData = [{
  name: "Digital threats to Democracy",
  description: "Developing new ICT platforms that enhance civic engagement, strengthen democracy, and monitor " +
      "elections.",
  image: "/static/ghana-smtc-2_1.png",
  link: "/dtd"
},
  {
    name: "HCI4D",
    description: "Inventing interaction designs to address the needs, desires and aspirations of people in " +
        "low-income areas.",
    image: "/static/moses_1.png",
    link: "/hci4d"
  },
  {
    name: "Peacebuilding in a Networked World",
    description: "Inventing new information and communication systems and examining the role of existing systems in " +
        "conflict stressed societies and post-conflict peace and reconciliation.",
    image: "/static/pcc-2.png",
    link: "/peacebuilding"
  },
  {
    name: "Open Innovation Platform",
    description: "The Open Innovation Platform is a research, innovation, and entrepreneurship program of Georgia Tech and GTSI.",
    image: "/static/lmi_1.jpeg",
    link: "/oip"
  }
]

// Create JSX elements for each project.
const projectDataJSX = []
projectsData.forEach((project)=>{
  projectDataJSX.push(
      <Grid.Column>
        <Container>
          <Image src={project.image} href={project.link} size='small' floated='left' bordered/>
          <Header>{project.name}</Header>
          <p>{project.description} <a href={project.link}>See more...</a></p>
        </Container>
      </Grid.Column>
  )
})

// markup
const PapersPage = () => {
  return (
      <>
        <NavBar></NavBar>
        <main style={pageStyles}>
          <title>Projects Page</title>
          <Container fluid style={textContainerStyles}>
            <Container style={innerContainerStyles} textAlign='left'>
              <Header size='medium' style={headerStyles}>Digital Threats to Democracy and Political Development</Header>
              <Divider/>
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
        </main>
        <FooterBar></FooterBar>
      </>
  )
}

export default PapersPage

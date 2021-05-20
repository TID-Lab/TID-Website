import * as React from "react";

import NavBar from '../components/NavBar';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
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

const innerContainerStyles = {
  padding: "4em 0"
}

// markup
const ProjectsPage = () => {
  return (
      <main style={pageStyles}>
        <title>Projects Page</title>
        <NavBar></NavBar>

        <Container fluid style={textContainerStyles}>
          <Container style={innerContainerStyles} textAlign='left'>
            <Header size='huge' style={headerStyles}>About the Lab</Header>
            <Divider/>
            <Image src={"./static/aggie_retreat_1.jpeg"} size='large' floated='right' />
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
              The T+ID Lab is directed by Dr. Michael L. Best, Professor, The Sam Nunn School of International
              Affairs and School of Interactive Computing, Georgia Institute of Technology.
            </p>
          </Container>
        </Container>
      </main>
  )
}

export default ProjectsPage

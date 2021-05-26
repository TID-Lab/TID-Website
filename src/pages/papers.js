import * as React from "react";
import 'semantic-ui-css/semantic.min.css';
import NavBar from '../components/NavBar';
import FooterBar from "../components/FooterBar";
import {Container, Divider, Grid, Header, Image, List} from "semantic-ui-react";
import papersData from "../data/papers.json";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "HelveticaNeue-Light",
  fontSize: "13pt"
}

const headerStyles = {
  fontFamily: "HelveticaNeue-Light",
}

const innerContainerStyles = {
  padding: "4em 0"
}

// Create JSX elements for each project.
const papersDataJSX = []
papersData.forEach((sections)=>{
  papersDataJSX.push(
      <>
        <Header>{sections.section}</Header>
        <Divider/>
        <List bulleted>
        {
          sections.papers.map((paper) => {
            if (paper.link) {
              return (
                  <List.Item><a href={paper.link}>{paper.citation}</a></List.Item>
              )
            } else {
              return (
                  <List.Item>{paper.citation}</List.Item>
              )
            }
          })
        }
        </List>
        <br/>
        <br/>
      </>
  )
})

// markup
const PapersPage = () => {
  return (
      <>
        <NavBar></NavBar>
        <main style={pageStyles}>
          <title>People Page</title>
          <Container fluid>
            <Container style={innerContainerStyles} textAlign='left'>
              {papersDataJSX}
            </Container>
          </Container>
        </main>
        <FooterBar></FooterBar>
      </>
  )
}

export default PapersPage

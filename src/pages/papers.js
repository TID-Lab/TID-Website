/*
This is the papers page on the website. This page does receive data from a json. If you would like to add/delete/edit
this page, simply edit the ../data/papers.json file to reflect changes. Papers do not require a link to appear. ML 2021
 */

import * as React from "react";
import {Container, Divider, Header, List} from "semantic-ui-react";
import NavBar from '../components/NavBar';
import FooterBar from "../components/FooterBar";
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

// Create JSX elements for each paper.
const papersDataJSX = []
papersData.forEach((sections)=>{
  papersDataJSX.push(
      <>
        <Header style={headerStyles}>{sections.section}</Header>
        <Divider/>
        <List bulleted animated>
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
        <title>Papers</title>
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

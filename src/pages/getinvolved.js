/*
This is the get involved page. This page does not draw data from any json files. Simply edit the text on this page to
make updates to the website. ML 2021.
 */

import * as React from "react";
import { Container, Divider, Header, Image } from 'semantic-ui-react';
import NavBar from '../components/NavBar';
import FooterBar from "../components/FooterBar";

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

/**
 * People data is formatted with the fields: name (their name), roleOrEducation (their education
 * or/and role in the lab), photoSrc (url for image), description (little blurb about
 * themseleves), personalLink (link to their own website of choice). In addition, peopleData
 * has two fields representing sections itself, peopleData.faculty (faculty) and
 * peopleData.students (students).
 */
// markup
const GetInvolvedPage = () => {
  return (
      <>
        <NavBar></NavBar>
        <main style={pageStyles}>
          <title>People Page</title>
          <Container fluid>
            <Container style={innerContainerStyles} textAlign='left'>
              <Header size='huge' style={headerStyles}>Get Involved</Header>
              <Divider/>
              <Image src={"/static/images/aggie_retreat_1.jpeg"} size='big' floated='left' rounded/>
              <p>We are currently seeking Ph.D., Master's, and undergraduate students at Georgia Tech to work with us.
                Contact us if you have a passion to truly impact the world and embrace working in inter-disciplinary teams.</p>
              <p>If you are interested in getting involved, please send an email briefly detailing your background and
                interests to <a href={"mailto:mikeb@gatech.edu"}>mikeb@gatech.edu.</a></p>
            </Container>
          </Container>
        </main>
        <FooterBar></FooterBar>
      </>
  )
}

export default GetInvolvedPage

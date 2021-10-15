/*
This page is the Peacebuilding in a Networked World page. This page is hardcoded and does not reflect the data on any
json file. If you would like to make edits to this page, do so in this file. ML 2021
 */

import * as React from "react";
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import NavBar from '../../components/NavBar';
import FooterBar from "../../components/FooterBar";

// Styles
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

// Markup
const OpenInnovationPage = () => {
  return (
      <>
        <NavBar></NavBar>
        <main style={pageStyles}>
          <title>Contact Us</title>
          <Container fluid>
            <Container style={innerContainerStyles} textAlign='left'>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Header size='huge' style={headerStyles}>Open Innovation Platform</Header>
                    <Divider/>
                    <Image src={"/static/images/open-innovation-off.png"} size='medium' floated='left' rounded/>
                    <p>
                      Inclusive innovation and social entrepreneurship with global connectivity. How do we design a
                      globally connected makerspace that is diverse, accessible, and welcoming? How do we apply global
                      manufacturing innovations and hardware prototyping efficiencies towards sustainable systems?
                    </p>
                    <p>
                      The Open Innovation Platform is an inclusive innovation and social entrepreneurship program of
                      Georgia Tech in Atlanta and at Georgia Tech - Shenzhen in China. The Platform will focus on
                      innovation and out-of-the-box thinking, will enable rich collaborations between Atlanta and
                      Shenzhen-based students and faculty and our external partners, and will create opportunities for
                      social and sustainable entrepreneurship and business creation. The Platform includes the
                      Technology Entrepreneurship Studio, a course sequence, incubator and accelerator; and the Project
                      Studio, a hands-on project-based environment and class available for students and Affiliates in
                      both Shenzhen and Atlanta. The Platform is housed within a maker and fab lab space situated at
                      Georgia Tech - Shenzhen.
                    </p>
                  </Grid.Column>
                </Grid.Row>
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

export default OpenInnovationPage

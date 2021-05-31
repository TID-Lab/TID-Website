/*
This is the human computer interaction for development page. This page is hardcoded and does not rely on a json file.
If you would like to create changes, do so in this file. ML2021
 */
import * as React from "react";
import { Container, Divider, Header, Image, Grid } from 'semantic-ui-react';
import NavBar from '../../components/NavBar';
import FooterBar from "../../components/FooterBar";

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
const HCI4DPage = () => {
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
                    <Header size='huge' style={headerStyles}>HCI For Development (HCI4D)</Header>
                    <Divider/>
                    <Image src={"/static/images/hci4d.png"} size='medium' floated='left' rounded/>
                    <p>
                      Exploring systems to empower people and address their needs, desires, and aspirations. How (or
                      why) do we design the "personal" out of "personal computers," the desk out of the desktop, and
                      English from the QWERTY keyboard? Instead, should we create a community computer based on
                      agricultural or family metaphors, for instance? What is a user or community centered design method
                      for low-income countries?
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Header size='medium' style={headerStyles}>HCI China</Header>
                    <Divider/>
                    <Image src={"/static/images/chinese.key.jpg"}
                           size='medium' floated='right' rounded/>
                    <p>
                      The HCI China project is comprised of a literature review that analyzes the trends and general
                      characteristics of human-computer interaction research originating from China, regarding China, or
                      both. Our study examines both English-language and Chinese-language papers and uncovers a few key
                      differences across these two sets of papers. We see that the English-language literature is more
                      human-focused, while the Chinese-language literature has a greater focus on specific technologies.
                      Looking at trends over time, the topics in the English-language literature showed some significant
                      changes throughout the collection's time period. In contrast, the topics in the Chinese-language
                      literature were more static. These characteristics and trends might be echoing those found in the
                      English-language HCI community and the HCI community in China.
                    </p>
                    <p><b>Status:</b> Open to Join</p>
                    <p>Image: <a>https://www.flickr.com/photos/basykes/5713453794</a></p>
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

export default HCI4DPage

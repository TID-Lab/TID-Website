/*
This is the people page of the website, if you want to quickly change this page, adjust the ../data/people.json file
to reflect the new members or edits to the older members. In addition, you will need to upload a SQUARE photo to the
public/static/images/ folder so that their image is reflected.
 */

import * as React from "react";
import { Container, Divider, Reveal, Grid, Header, Image } from 'semantic-ui-react'
import NavBar from '../components/NavBar';
import FooterBar from "../components/FooterBar";
import peopleData from "../data/people.json";

// Styles
const pageStyles = {
  color: "#232129",
  fontFamily: "HelveticaNeue-Light",
  fontSize: "13pt"
};

const headerStyles = {
  fontFamily: "HelveticaNeue-Light",
};

const innerContainerStyles = {
  padding: "4em 0"
};

/**
 * People data is formatted with the fields: name (their name), roleOrEducation (their education
 * or/and role in the lab), photoSrc (url for image), description (little blurb about
 * themseleves), personalLink (link to their own website of choice). In addition, peopleData
 * has two fields representing sections itself, peopleData.faculty (faculty) and
 * peopleData.students (students).
 */
// markup
const PeoplePage = () => {
  return (
      <>
        <NavBar></NavBar>
        <main style={pageStyles}>
          <title>People Page</title>
          <Container fluid>
            <Container style={innerContainerStyles} textAlign='left'>
              <Header size='huge' style={headerStyles}>Faculty</Header>
              <Divider/>
              <Grid columns={2}>
                <Grid.Row>
                  {peopleData.faculty.map((faculty) => {
                    return (
                        <Grid.Column key={faculty.name} mobile={16} tablet={8} computer={4}>
                          <Reveal animated='move down'>
                            <Reveal.Content visible>
                              <Image src={faculty.photoSrc} size='medium' rounded/>
                            </Reveal.Content>
                            <Reveal.Content hidden>
                              {/* 300px is the width of medium image */}
                              <Container style={{width: "300px"}}>
                                <p>{faculty.description}</p>
                              </Container>
                            </Reveal.Content>
                          </Reveal>
                          <Header style={headerStyles}><a href={faculty.personalLink}>{faculty.name}</a></Header>
                          <p>{faculty.roleOrEducation}</p>
                        </Grid.Column>
                    );
                  })}
                </Grid.Row>
              </Grid>
              <br/>
              <br/>
              <br/>
              <br/>
              <Header size='huge' style={headerStyles}>Current Students</Header>
              <Divider/>
              <Grid columns={2}>
                {peopleData.students.map((student) => {
                  return (
                      <Grid.Column mobile={16} tablet={8} computer={4} key={student.name}>
                        <Reveal animated='move down'>
                          <Reveal.Content visible>
                            <Image src={student.photoSrc} size='medium' rounded/>
                          </Reveal.Content>
                          <Reveal.Content hidden>
                            {/* 300px is the width of medium image */}
                            <Container style={{width: "300px"}}>
                              <p>{student.description}</p>
                            </Container>
                          </Reveal.Content>
                        </Reveal>
                        <Header style={headerStyles}><a href={student.personalLink}>{student.name}</a></Header>
                        <p>{student.roleOrEducation}</p>
                      </Grid.Column>
                  );
                })}
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

export default PeoplePage

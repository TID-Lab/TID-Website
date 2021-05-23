import * as React from "react";
import peopleData from "../data/people.json";
import NavBar from '../components/NavBar';
import FooterBar from "../components/FooterBar";
import {
  Container,
  Divider,
  Reveal,
  Grid,
  Header,
  Image,
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
                        <Grid.Column mobile={16} tablet={8} computer={4}>
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

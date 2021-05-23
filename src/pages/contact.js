import * as React from "react";
import NavBar from '../components/NavBar';
import {
  Container,
  Divider,
  Header,
  Segment
} from 'semantic-ui-react'
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
const contactInfoStyles = {
  lineHeight: "normal"
}

const innerContainerStyles = {
  padding: "4em 0"
}

const mapSegmentStyles = {
  overflow: "hidden",
  paddingBottom: "56.25%",
  position: "relative",
  height:0
}

const mapIframeStyles = {
  left:0,
  top:0,
  height:"100%",
  width:"100%",
  position:"absolute",
  border: 0
}

/**
 * People data is formatted with the fields: name (their name), roleOrEducation (their education
 * or/and role in the lab), photoSrc (url for image), description (little blurb about
 * themseleves), personalLink (link to their own website of choice). In addition, peopleData
 * has two fields representing sections itself, peopleData.faculty (faculty) and
 * peopleData.students (students).
 */
// markup
const ContactPage = () => {
  return (
      <>
        <NavBar></NavBar>
        <main style={pageStyles}>
          <title>Contact Us</title>
          <Container fluid>
            <Container style={innerContainerStyles} textAlign='left'>
              <Header size='huge' style={headerStyles}>Contact Us</Header>
              <Divider/>
              <div style={contactInfoStyles}>
                <p>
                  <b>Lab Director:</b> Michael L. Best<br/>
                  <b>Email:</b> <a href="mailto:mikeb@gatech.edu">mikeb@gatech.edu</a><br/>
                  <b>Phone:</b> <a href="tel:+1404-894-0298">+1 404-894-0298</a><br/>
                </p>
                <p>
                  <b>Address:</b><br/>
                  Technology Square Research Building (TSRB)<br/>
                  Room 329<br/>
                  85 Fifth Street NW<br/>
                  Atlanta, GA 30308<br/>
                  USA <br/>
                  {/* Also hardcoded */}
                  <a href="https://goo.gl/maps/XVykAnkYys4RLzrq8">Google Maps</a>
                </p>
                <Segment style={mapSegmentStyles}>
                  {/* Hardcoded from previous website*/}
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.355246039734!2d-84.39220728519385!3d33.77732333961583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50466db4dc359%3A0x3e130665d2d8138b!2sTechnology%20Square%20Research%20Building%2C%2085%205th%20St%20NW%2C%20Atlanta%2C%20GA%2030308!5e0!3m2!1sen!2sus!4v1587582467388!5m2!1sen!2sus"
                       height="450" frameBorder="0" style={mapIframeStyles} allowFullScreen="" aria-hidden="false"
                      tabIndex="0">
                  </iframe>
                </Segment>
              </div>
              <Header style={headerStyles}>Directions to TSRB via Public Transit (MARTA)</Header>
              <p>
                Ride the MARTA North-South Rail Line (the orange line) to the Midtown station and exit the station to
                the south onto Peachtree Place NE. There, you will find a stop for the Tech Trolley.
                This is a free bus service to campus. Ride the Trolley to the stop just past Spring Street, which is in
                front of a Moe’s restaurant. There is a pathway to the right of the restaurant which passes some other
                shops. Follow that path through the courtyard and the entrance to TSRB will be on your left.
              </p>
              <Header style={headerStyles}>Gaining access to TSRB when you are in Tech Square</Header>
              <p>
                TSRB is the leftmost building as you face the Centergy plaza from 5th street. It has a Moe’s Mexican
                restaurant in its ground floor. The entrance to TSRB is up the slight steps that run between the Moe’s
                and the courtyard area. The entrance are double doors on your left. TSRB is a secure building with a
                security desk at the entrance. If you don’t have a BuzzCard, you will need to sign in with security.
                If you encounter any problems, please contact whoever you are meeting to have them escort you in. Or
                have the security desk call Michael Best (on extension 4-0298).
              </p>
              <Header style={headerStyles}>Directions to Room 329</Header>
              <p>
                Take the TSRB elevator to the third floor. Upon exiting the elevator, turn right, then right again and
                proceed a few meters down the hall. The office of Dr. Michael L. Best is now directly to your left and
                the lab area is to the left and right of the office.
              </p>
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

export default ContactPage

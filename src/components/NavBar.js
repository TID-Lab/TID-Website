/*
This is the navbar component and occupies the top of the website. This provides links to navigate through the website
as well as the icons and logos on the top of the website. ML 2021
 */

import React from 'react';
import 'semantic-ui-css/semantic.min.css'; // Since this component appears on any page, I import the css file here.
import { Container, Image, Menu } from 'semantic-ui-react';

// Styles
const menuStyles = {
  backgroundColor: "#505050",
  fontFamily: "HelveticaNeue-Light",
  margin: "0 .5em",
}

const textStyles = {
  color: "#FFFFFF",
}

const NavBar = () => (
    <header>
      <Container>
        <div style={{textAlign: "center"}}>
          <Image src={"/static/images/tidlogo.png"} href={"/"} size="medium" floated="left"/>
        </div>
        <Image src={"/static/images/gatech-logo.png"} href={"https://www.gatech.edu/"} size="medium" floated="right"/>
      </Container>
      <Menu text style={menuStyles} fluid widths={5}>
        <Container>
          <Menu.Item as='a' href="/projects" style={textStyles}>
            Projects
          </Menu.Item>
          <Menu.Item as='a' href="/papers" style={textStyles} >Papers</Menu.Item>
          <Menu.Item as='a' href="/people" style={textStyles}>People</Menu.Item>
          <Menu.Item as='a' href="/getinvolved" style={textStyles}>Get Involved</Menu.Item>
          <Menu.Item as='a' href="/contact" style={textStyles}>Contact</Menu.Item>
        </Container>
      </Menu>
    </header>
)

export default NavBar

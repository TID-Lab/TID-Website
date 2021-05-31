/*
This is the footer bar component. This bar appears on every page on the bottom of the screen. It contains the copyright
information and creative commons logo. ML 2021
 */

import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'

const footerStyles = {
  backgroundColor: "#e9e9e9",
  fontFamily: "HelveticaNeue-Light",
  border: "0"
}

const FooterBar = () => (
    <footer>
      <Container fluid>
        <Menu style={footerStyles} text fixed="bottom">
          <Container textAlign={"left"}>
            <Menu.Item>
              <Image src={"/static/images/CC.png"} size='tiny' floated='left'
                     href={"http://creativecommons.org/licenses/by-nc-sa/4.0/"}/>
              This work is licensed under a Creative Commons Attribution-Non Commercial-ShareAlike 4.0
              International License
            </Menu.Item>
          </Container>
        </Menu>
      </Container>
    </footer>
)

export default FooterBar

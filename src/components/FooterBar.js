import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const textStyles = {
  fontFamily: "HelveticaNeue-Light",
  fontSize: "10pt"
}
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
              <Image src={"./static/images/CC.png"} size='tiny' floated='left'
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

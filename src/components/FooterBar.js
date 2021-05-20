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
    <div>
      <Container fluid>
        <Menu fixed={"bottom"} style={footerStyles} text>
          <Container textAlign={"left"}>
            <Menu.Item>
              <Image src={"./static/CC.png"} size='tiny' floated='left'
                     href={"http://creativecommons.org/licenses/by-nc-sa/4.0/"}/>
              This work is licensed under a Creative Commons Attribution-Non Commercial-ShareAlike 4.0
              International License
            </Menu.Item>
          </Container>
        </Menu>

      </Container>
    </div>
)

export default FooterBar
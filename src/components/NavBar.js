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


const menuStyles = {
  backgroundColor: "#505050",
  fontFamily: "HelveticaNeue-Light",
  margin: "0 .5em",
}

const textStyles = {
  color: "#FFFFFF",
}

const NavBar = () => (
    <div>
      <Container>
        <Grid>
          <Grid.Column>
            <Image src={"./static/Logo.png"} size='tiny' floated='left'
                   href={"http://creativecommons.org/licenses/by-nc-sa/4.0/"}/>
            <Image src={"./static/tid-white.png"} size='tiny' floated='left'
                   href={"http://creativecommons.org/licenses/by-nc-sa/4.0/"}/>
          </Grid.Column>
          <Grid.Column>
            <Image src={"./static/CC.png"} size='tiny' floated='left'
                   href={"http://creativecommons.org/licenses/by-nc-sa/4.0/"}/>
          </Grid.Column>
        </Grid>
      </Container>

      <Menu text style={menuStyles} fluid widths={5}>
        <Container>
          <Menu.Item as='a' href="/projects" style={textStyles}>
            Projects
          </Menu.Item>
          <Menu.Item as='a' href="/" style={textStyles}>Home</Menu.Item>
          <Menu.Item as='a' style={textStyles}>People</Menu.Item>
          <Menu.Item as='a' style={textStyles}>Get Involved</Menu.Item>
          <Menu.Item as='a' style={textStyles}>Contact</Menu.Item>
        </Container>
      </Menu>
    </div>
)

export default NavBar

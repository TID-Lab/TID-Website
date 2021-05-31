import * as React from "react"
import { Link } from "gatsby"
import { Container } from "semantic-ui-react";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "HelveticaNeue-Light",
  fontSize: "13pt"
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>404: Not found</title>
      <Container>
        <br/>
        <br/>
        <h1 style={headingStyles}>404: Page not found</h1>
        <p> Sorry we couldn’t find what you were looking for.</p>
        <p>Feel free to contact us to let us know this webpage can't be found.
          <br />
          <br />
          <Link to="/">Return home</Link>.</p>
      </Container>
    </main>
  )
}

export default NotFoundPage

/*
This page is the Peacebuilding in a Networked World page. This page is hardcoded and does not reflect the data on any
json file. If you would like to make edits to this page, do so in this file. ML 2021
 */

import * as React from "react";
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import NavBar from '../../components/NavBar';
import FooterBar from "../../components/FooterBar";

// Styles
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

// Markup
const PeacebuildingPage = () => {
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
                    <Header size='huge' style={headerStyles}>Peacebuilding In A Networked World</Header>
                    <Divider/>
                    <Image src={"/static/images/hetherington.jpeg"} size='medium' floated='left' rounded/>
                    <p>
                      Inventing new information and communication systems and examining the role of existing systems in
                      conflict stressed societies and post-conflict peace and reconciliation. Can rich media and the internet
                      help to create dialogue and ultimately heal a nation? How can mobile phones enhance security? Can we
                      build virtual peace memorials?
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Header size='medium' style={headerStyles}>
                      Liberia TRC Digital Archive
                    </Header>
                    <Divider/>
                    <Image src={"/static/images/trc.png"}
                           size='large' floated='right' rounded/>
                    <p id="liberiaTRC">
                      Liberia’s Truth and Reconciliation Commission (TRC) concluded its work and released its final
                      report in December of 2009. Georgia Tech collaborated with the TRC - working also with the Office
                      of the President and Ministry of Justice of Liberia, and the US Embassy and USAID in Monrovia - to
                      take receipt of their records for preservation and digital archiving. With support from the US
                      Department of Homeland Security we hope to create the first truly accessible and richly multimedia
                      digitized archive of a truth commission, including curation and digitization of tens of thousands
                      of victim statements, along with an innovative virtual memorial and crowdsourcing facilities for
                      indexing and transcription. This digital system and collection will serve as a lasting and unique
                      resource in support of human rights investigations, scholarship and for assisting national
                      reconstruction and the rule of law in Liberia. Furthermore, scholars at Georgia Tech, working with
                      Liberian stakeholders, will design and create virtual facilities for browsing, viewing and
                      connecting with this content. These two virtual systems will assist the process of transitional
                      justice, the creation of a human rights culture, and post-conflict education and memorialization.
                    </p>
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

export default PeacebuildingPage

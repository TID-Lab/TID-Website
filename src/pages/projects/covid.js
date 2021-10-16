/*
This page is the COVID-19 social media project page. This page is hardcoded and does not reflect the data on any
json file. If you would like to make edits to this page, do so in this file. ML 2021 / AZC 2021
 */

import * as React from "react";
import { Container, Divider, Header, Image, Grid } from 'semantic-ui-react'
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
const CovidPage = () => {
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
                    <Header size='huge' style={headerStyles}>Community-Based COVID-19 Social Media Monitoring and Response</Header>
                    <Divider/>
                    <Image src={"/static/images/covid_posts.png"} size='large' floated='right' rounded/>
                    <p>
                      Supporting community partners in Georgia to track, triage, and respond to COVID-19 social media content 
                      to inform and enhance their COVID-19 response efforts. Who do different minoritized communities trust 
                      online? What content is most effective at raising vaccine confidence? What content is most harmful? 
                      How can we usefully integrate hyperlocal social media monitoring with targeted outwards health 
                      communication?
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Header size='medium' id="youth" style={headerStyles}>
                      Building COVID-19 Vaccine Confidence among Black and Latinx Youth
                    </Header>
                    <Divider/>
                    <Image src={"/static/images/covid_dashboard.png"}
                           size='medium' floated='right' rounded/>
                    <p>
                      In the US, the state of Georgia has been hard-hit by COVID-19, with Black and Latinx communities 
                      disproportionately so. Vaccine hesitancy, fueled by historical distrust in discriminatory healthcare 
                      institutions, the emerging and uncertain nature of the virus, and mis- and disinformation spreading 
                      online, has proven to be a barrier to these communities’ recovery from the pandemic. This has especially 
                      been an issue among college-aged youth, for whom vaccination rates remain relatively low.
                    </p>
                    <p>
                      Building on <a href="https://tid-lab.github.io/getaggie/">Aggie's</a> social media content aggregation 
                      capabilities, the T+ID team has developed a COVID-19 social media dashboard in collaboration with 
                      <a href="https://www.projectpeach.org/"> Project PEACH</a> and 
                      <a href="https://www.msm.edu/news-center/coronavirusadvisory/GeorgiaCeal/georgiaceal.php"> GEORGIA CEAL</a>. 
                      The dashboard allows users to monitor COVID-related content from a curated list of social media accounts 
                      relevant to the communities we are working with, emphasizing local content. The aim is for social media 
                      monitoring to inform community representatives’ outreach efforts to their peers. The T+ID team is currently 
                      exploring new social media analytic methods to improve tracking, identification of relevant content, and 
                      message impact assessment. We are also developing tools in the dashboard to assist partners in crafting a 
                      social media-based response.
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

export default CovidPage

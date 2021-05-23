import * as React from "react";
import NavBar from '../../components/NavBar';
import {
  Container,
  Divider,
  Header, Image,
} from 'semantic-ui-react'
import FooterBar from "../../components/FooterBar";

// styles
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

/**
 * People data is formatted with the fields: name (their name), roleOrEducation (their education
 * or/and role in the lab), photoSrc (url for image), description (little blurb about
 * themseleves), personalLink (link to their own website of choice). In addition, peopleData
 * has two fields representing sections itself, peopleData.faculty (faculty) and
 * peopleData.students (students).
 */
// markup
const DtDPage = () => {
  return (
      <>
        <NavBar></NavBar>
        <main style={pageStyles}>
          <title>Contact Us</title>
          <Container fluid>
            <Container style={innerContainerStyles} textAlign='left'>
              <Header size='huge' style={headerStyles}>Digital Threats to Democracy</Header>
              <Divider/>
              <Image src={"/static/images/dt2d.png"} size='large' floated='right' rounded/>
              <p>
                Enhancing civic engagement, strengthening democracy, and monitoring elections. What role does social
                media play in elections? How can we identify and respond to hate speech and disinformation designed to
                undermine democratic practice? Can we build systems that enhance transparency and good governance? How
                can ICTs help promote an innovative and effective civil society?
              </p>
              <p>
                We are inventing new software platforms and real-world processes to help identify, track, and respond
                to digital threats to democratic development. In particular, we focus on hate speech and
                disinformation during election periods in emerging democracies. Our tools include new augmented AI
                systems to assist human trackers as they monitor multiple social media feeds in semi real-time.
              </p>
              <p>
                Digital Threats to Democracy (DtD) programs often make use of
                <a href="https://tid-lab.github.io/getaggie/"> Aggie</a>, an open-source cross-media
                tracking platform. Aggie has been used primarily for real-time online content tracking and response to
                critical events during national elections. The T+ID team has collaborated on the deployment of the Aggie
                platform during elections in Nigeria, Ghana, Kenya, Liberia, Iraq, Venezuela, and other countries
                worldwide.
              </p>
              <br/>
              <br/>
              <Header size='medium' id="myanmar" style={headerStyles}>
                Hate Speech and Disinformation in Myanmar 2020 Election
              </Header>
              <Divider/>
              <Image src={"/static/images/Myanmar_election_2015_ballot_paper.jpeg"}
                     size='medium' floated='right' rounded/>
              <p>
                Myanmar has experienced a recent explosion in mobile internet access. Enabled by this rise in network
                access has been a wave of disinformation, hate speech, attacks on free speech and human rights groups,
                and physical violence. The UN’s independent international fact-finding mission on Myanmar has identified
                the significant negative role that hate speech and disinformation has played, especially when
                communicated across social media. This has been most clearly evident in the use of social media to
                convey hate speech and coordinate attacks against linguistic and religious minority groups – accumulated
                actions which the United Nations labeled as genocide. This extreme social stress in Myanmar, the
                particularly fraught position of minority populations, and the specific and meaningful range of clearly
                identified digital threats underpin the relevance of this particular case study and field deployment.
              </p>
              <p>
                Software text tools for the Myanmar majority Burmese language are immature and we are integrating and
                innovating on text analysis and natural language processing tools for Burmese. We are alo developing new
                machine learning modules to assist trackers specifically in identification and monitoring of hate speech
                and disinformation. These NLP and ML engines help to focus trackers’ attention on suspect posts,
                ensuring a more manageable process and enabling semi real-time response. The project is also developing
                new systems to assist in analysis and traffic categorization for non-real-time reporting. These modules,
                for instance, can be used to provide daily or weekly reports of aggregate hate speech activity in the
                time period around a national election. Such reports could help inform the work of national election
                commissions, social media platform providers, and the international electoral observer community.
              </p>
              <p>
                While this initial NLP work will be targeted towards communication in Burmese, many of our findings
                should be generalizable and extendable to other languages and contexts, especially other low-resource
                languages like Burmese.
              </p>
              <p>Image: https://upload.wikimedia.org/wikipedia/commons/e/e5/Myanmar_election_2015_ballot_paper.jpg</p>
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

export default DtDPage

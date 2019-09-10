import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import BookingForm from '../components/BookingForm';

const Section = styled.section`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
a {
  text-decoration: underline;
  color: ${({ background }) => background ? '#86CDCA;' : '#FFFFFF'};

}
h3 {
  margin-top: 30px;
}
display: flex;
flex-direction: column;
padding: 50px 20px;
background: ${({ background }) => background ? '#FFFFFF': 'linear-gradient(#029D9E,#86CDCA);'};
text-align: ${({ alignRight }) => alignRight ? 'right': 'left'};
  color: ${({ background }) => background ? '#86CDCA;' : '#FFFFFF'};
p {
  max-width: 300px;
  margin-right: ${({ alignRight }) => alignRight ? '0': 'auto'};;
  margin-left: ${({ alignRight }) => alignRight ? 'auto': '0'};;
  font-family: 'Barlow';
  letter-spacing: 0.25px;
  font-size: 20px;
  font-weight: 500;
  color: ${({ background }) => background ? '#029D9E' : '#FFFFFF'};
}
h1 {
  font-family: 'Barlow';
  font-size: 54px;
  font-weight: bold;
  color: ${({ background }) => background ? '#029D9E' : '#FFFFFF'};
}
h2 {
  color: ${({ background }) => background ? '#029D9E' : '#FFFFFF'};
  width: auto;
  font-family: 'Barlow';
  font-size: 54px;
  font-weight: 400;
}
h3 {
  color: ${({ background }) => background ? '#029D9E;' : '#FFFFFF'};
  font-family: 'Barlow';
}
@media(min-width: 764px) {
  padding: 100px 90px;
  p {
    max-width: 600px;
  }
  h1 {
    font-size: 54px;
  }
}
@media(min-width: 992px) {
  h1 {
    font-size: 80px;
  }
  h2 {
    font-size: 80px;
  }
}
`

const IndexPage = () => (
  <Layout>
    <SEO
      title={"The Music House | Piano & keyboard lessons"}
      description="Engaging piano and keyboard lessons in Bath, Bristol and surrounding areas. Affordable group lessons aimed at children and new starters, and one-to-one sessions for all ages."
      />
    <Hero />
    <Section alignRight >
      <div className="text-container">
        <h1>What we do.</h1>
        <p>
          At The Music House we offer <strong>affordable</strong> piano and keyboard lessons for children and adults, in various
          locations around <em>Bath, Bristol and the surrounding areas</em>.
           &nbsp;<a href="/methodology/#group" className="text-link">Groups</a> and <a href="/methodology/#individual" className="text-link">individual</a> sessions are available to suit your needs and budget.
         </p>
          <h3 className="left"><strong>Groups</strong></h3>
          <p className="left">Our group curriculum is geared towards <strong>young learners</strong>. The lessons are dynamic and fun, incorporating the basic concepts of music theory which are addressed through play and story-telling, practice is broken up with games that introduce elements of aural training (listening skills). You can be sure that your young ones will enjoy these sessions!</p>
          <a href="/methodology/#group">Read more about our group methodology</a>
          <h3><strong>Individual</strong></h3>
          <p>At The Music House we also offer individual piano lessons for all ages.
            For children who prefer making their first steps in the presence of just the teacher,
            for those more advanced wishing to prepare for ABRSM, or Trinity College exams, or for adults who
            are looking to delve into the music world for the first time - or the first time in a while. Depending on your needs,
            session length can be arranged accordingly.
          </p>
          <h2>High quality teaching</h2>
          <h2>Affordable prices</h2>
          <h2>Individuals</h2>
          <h2>Groups</h2>
      </div>
    </Section>
    <Section background>
      <div className="text-container">
        <h1>Who we are.</h1>
        <p>
          Here at The Music House we are a small team of professionals, who are absolutely crazy about making <strong>your experience</strong> with us the best possible!
        </p>
        <h3>Kamila</h3>
        <p>Kamila is an <strong>experienced</strong> music teacher and qualified music therapist, with years of experience working
          with children and young people. Throughout the years of teaching young learners she has designed
          her own <strong>unique curriculum</strong>, which combines various approaches to learning, and succeeds in giving children a
          solid base on which they can build their skills, and encourages an ongoing love of music.</p>
        <h3>James</h3>
        <p>James is an experienced <strong>product developer</strong> with a passion for creative projects.
          He runs the administrative side, builds our online presence, and ensures that we stay <strong>innovative</strong> and forward-thinking
          in our approach to music, teaching and business.
        </p>
        <h2>Experienced</h2>
        <h2>Unique</h2>
        <h2>Dynamic</h2>
        <h2>Engaging</h2>
      </div>
    </Section>
    <Pricing />
    <BookingForm />
  </Layout>
)

export default styled(IndexPage)`

`;

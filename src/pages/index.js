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
a {
  text-decoration: underline;
}
display: flex;
flex-direction: column;
margin: 50px 0;
padding: 15px;
text-align: ${({ alignRight }) => alignRight ? 'right': 'left'};
p {
  max-width: 300px;
  margin-right: ${({ alignRight }) => alignRight ? '0': 'auto'};;
  margin-left: ${({ alignRight }) => alignRight ? 'auto': '0'};;
  font-family: 'Barlow';
  letter-spacing: 0.25px;
}
h1 {
  font-family: 'Barlow';
  font-size: 54px;
  font-weight: bold;
  color: #4A4A4A;
}
h2 {
  color: #4A4A4A;
  width: auto;
  font-family: 'Barlow';
  font-size: 54px;
  font-weight: 400;
}
@media(min-width: 764px) {
  padding: 30px 90px;
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
    <SEO title={"Piano & keyboard lessons, groups and individuals"} />
    <Hero />
    <Section alignRight >
      <div className="text-container">
        <h1>What we do.</h1>
        <p>
          At The Music House we offer <strong>affordable</strong> piano and keyboard lessons for children of all ages.
           &nbsp;<a className="text-link">Groups</a> and <a className="text-link">individual</a> sessions are available to suit your needs and budget.
          We also offer beginners classes for adults looking to delve into the music world for the
          first time - or the first time in a while </p>
          <h2>High quality teaching</h2>
          <h2>Affordable prices</h2>
          <h2>Individuals</h2>
          <h2>Groups</h2>
      </div>
    </Section>
    <Section>
      <div className="text-container">
        <h1>Who we are.</h1>
        <p>
          We are a small collection of <strong>experienced</strong> music teachers and music therapist,
          with years of experience working with children and young people. Throughout the years of
          teaching young learners we have designed <strong>our own curriculum</strong>, which combined various
          approaches to learning, making a <em>unique method</em> which succeeds in giving children a solid base
          on which they can build their skills, and encourages an ongoing <strong>love of music</strong>.
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

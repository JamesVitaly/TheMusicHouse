import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import Button from '../components/_common/Button';

const Section = styled.section`
a {
  text-decoration: none;
}
display: flex;
flex-direction: column;
margin: 100px 0 100px;
padding: 15px;
text-align: ${({ alignRight }) => alignRight ? 'right': 'left'};
.Buttons {
  margin: 25px 0;
  display: flex;
}
p {
  max-width: 300px;
  margin-top: 25px;
  font-family: 'Barlow';
  letter-spacing: 0.25px;
  margin-right: ${({ alignRight }) => alignRight ? '0': 'auto'};;
  margin-left: ${({ alignRight }) => alignRight ? 'auto': '0'};;
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

const SecondPage = () => (
  <Layout>
    <SEO title="Methodology | Curriculum and style of teaching for keyboard and piano" />
    <Section>
      <h1>Methodology.</h1>
      <p>
        Dynamic and engaging lessons,  designed to cultivate
        enjoyment and enthusiasm for music. Learn a new skill
        and enjoy doing it. <strong>Read on to find out more about our methods
        and style of teaching.</strong>
      </p>
      <div className='Buttons'>
        <a href="/methodology/#group"><Button isPrimary label="Group sessions"/></a>
        <a href="/methodology/#individual"><Button label="Individual sessions"/></a>
      </div>
    </Section>
    <Section alignRight>
      <h1>Groups.</h1>
      <p>
        Group sessions are aimed solely at younger children, and  offer interactive and engaging
        lessons for beginners and new learners. Children learn in small groups with a maximum of ten other students.
      </p>
    </Section>
    <Section>
      <h1>Structure.</h1>
      <p>
        In the first term children are introduced to the
        keyboard and its structure. They learn where the notes live on the keyboard,
        and begin playing simple pieces using simple letter notation. We introduce basic notes values and music theory concepts, which gives children the core
        understanding of all the concepts while their keyboard skills develop.
      </p>
      <p>
        This level is designed to lay the ground for the students, after which they will begin reading actual music notation.
        Through experience we have learnt that introducing notation too early early can discourage children and
        discontinue their learning. We introduce the notes and their location on the keyboard first and allow time
        for this knowledge to be
        fully incorporated into children’s understanding, before moving on to the notation.
      </p>
    </Section>
  </Layout>
)

export default SecondPage

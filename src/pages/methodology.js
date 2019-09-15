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

background: #86CDCA;
display: flex;
flex-direction: column;
padding 100px 15px;
text-align: ${({ alignRight }) => alignRight ? 'right': 'left'};
.Buttons {
  margin-top: 25px;
  margin-right: 0;
  margin-left: auto;
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
  color: #029D9E;
}
h2 {
  color: #4A4A4A;
  width: auto;
  font-family: 'Barlow';
  font-size: 54px;
  font-weight: 400;
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
        <a href="#group"><Button isPrimary label="Group sessions"/></a>
        <a href="#individual"><Button label="Individual sessions"/></a>
      </div>
    </Section>
    <Section id="group" alignRight>
      <h1>Groups.</h1>
      <p>
        Group sessions are aimed solely at younger children, and  offer interactive and engaging
        lessons for beginners and new learners. Children learn in small groups with a maximum of ten other students.
      </p>
      <h3>Structure</h3>
      <p>Every term children complete a series of learning goals, which allows them to progress to the next stage.</p>
      <p>In the first term children are introduced to the keyboard and its structure. They learn where the notes live on the keyboard, and begin playing simple pieces using basic letter notation. We introduce the first note values and music theory concepts, which gives children the core understanding of all the concepts while their keyboard skills develop.
      This level is designed to lay the ground for the students, after which they will begin reading actual music notation.
    </p>
    <p>Each session lasts 50 minutes. </p>
    <p>The group learning will be designed according to the school calendar and the school breaks will be the breaks in the sessions. Depending on the start of the course and the length of the term, we aim at offering a minimum of 8 sessions each term, which will end in each child progressing to the next learning level.
    The price of the session is £12, and the sessions are designed as a course. Children are strongly encouraged to attend all sessions.
    </p>
    <div className="Buttons">
    <a href="/#book"><Button isPrimary label="Book now"/></a>
    </div>
    </Section>
    <Section id="individual">
      <h1>Individuals.</h1>
      <p>
      When working on a one to one basis, our approach is focused on meeting students’
      individual goals. We offer sessions to those who want to prepare for ABRSM or Trinity College exams,
      those who want to learn to play their favourite songs, pick up music as a hobby, improvise or even compose
      their own pieces. The length of the session will depend on the student -
      for those preparing for exams, 45 minutes is recommended. Get in touch to discuss your sessions.
      </p>
      <a href="/#book"><Button isPrimary label="Book now"/></a>
    </Section>
  </Layout>
)

export default SecondPage;

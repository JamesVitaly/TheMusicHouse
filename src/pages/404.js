import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NotFound from '../images/404.png';
import styled from 'styled-components';

const NotFoundPage = ({ className }) => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={className}>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just found a page that doesn&#39;t exist... the sadness.</p>
      </div>
      <img src={NotFound} />
    </div>
  </Layout>
)

export default styled(NotFoundPage)`
display: flex;
flex-direction: column;
text-align: center;
margin-top: 50px;

h1 {
  font-family: 'Barlow';
  font-size: 54px;
  font-weight: bold;
  color: #4A4A4A;
}
p {
  font-family: 'Barlow';
  color: #4A4A4A;
}
  img {
    width: 600px;
    max-width: 800px;
    margin: 0 auto;
  }
`

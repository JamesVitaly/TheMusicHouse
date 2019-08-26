import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './_common/Button';
const Pricing = ({ className }) => (
  <section id="pricing" className={className}>
    <h1>How much it costs.</h1>
    <div className="container">
      <div className="inner-container">
        <div className="price-square price-square-group">
          <h2>Groups</h2>
          <h1>£12</h1>
          <p>for a 50 minute session</p>
          <p className="small">
            Maximum 10 children per group, designed as part of a 9
            session course, to span a normal school term. Read more here
          </p>
        </div>
      </div>
      <div className="inner-container">
        <div className="price-square price-square-individual">
          <h2>Individuals</h2>
          <h1>£30</h1>
          <p>for a 45 minute session</p>
          <p className="small">
            Other session lengths available on request to suit your particular needs. See methodology for more info.
         </p>
        </div>
      </div>
    </div>
    <Button label="Book your first session now" isPrimary/>
  </section>
);

export default styled(Pricing)`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  width: 100%;
  button {
    width: 300px;
    margin: 30px auto;
  }
  .price-square {
    border: 4px solid #979797;
    height: 350px;
    background: #D8D8D8;
    margin: 0 auto;
    padding: 15px;
  }
  p {
    text-align: center;
    font-size: 24px;
  }
  .small {
    font-size: 14px;
  }
  .container {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .inner-container {
    width: 100%;
  }
  .price-square-group {
    width: 100%;
    margin: 0 auto;
  }
  .price-square-individual {
    width: 100%;
    margin: 50px auto;
  }
  h1 {
    font-family: 'Barlow';
    font-size: 54px;
    font-weight: bold;
    color: #4A4A4A;
    text-align: center;
  }
  h2 {
    color: #4A4A4A;
    width: auto;
    font-family: 'Barlow';
    font-size: 44px;
    font-weight: 400;
    text-align:center;
  }
  @media(min-width: 764px) {
    h1 {
      font-size: 80px;
    }
    h2 {
      font-size: 64px;
    }
    .container {
      flex-direction: row;
    }
    .inner-container {
      width: 50%;
    }
    .price-square {
      width: 450px;
      height: 400px;
    }
    .price-square-group {
      margin-right: 40px;
      margin-left: auto;
      margin-top: 0;
    }
    .price-square-individual {
      margin-right: auto;
      margin-left: 40px;
      margin-top: 0;
    }
  }
`;

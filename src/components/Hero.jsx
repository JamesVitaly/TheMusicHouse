import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './_common/Button';

const Hero = ({ className }) => (
  <section className={className}>
    <div className="column left">
      <div className="text-statements">
        <h1>Music</h1>
        <h2>Enjoyment</h2>
        <h2>Development</h2>
        <h2>Self-expression</h2>
        <h2>Confidence</h2>
      </div>
    </div>
    <div className="column right">
      <div className="call-to-action">
        <p>Whatever your reason for learning keyboard or piano, get started with the Music House by booking your first lesson today.</p>
        <div className="call-to-action-buttons">
          <a href="/#book"><Button label="Book a lesson" isPrimary/></a>
          <a href="/methodology/#book"><Button label="Group sessions"/></a>
        </div>
      </div>
    </div>
  </section>
);

Hero.propTypes = {

};

Hero.defaultProps = {

};

export default styled(Hero)`
display: flex;
flex-direction: column;
width: 100%;
box-sizing: border-box;
a {
  text-decoration: none;
}
.left {
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .text-statements {
    margin: 0 auto;
    width: 100%;
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

    @media(min-width: 992px) {
      h1 {
        font-size: 80px;
      }
      h2 {
        font-size: 80px;
      }
    }
  }
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-top: 0px;
  padding: 20px;
  position: relative;
  .call-to-action {
    top: 0px;
    position: relative;
    margin: 0 20px 0 0;
    p {
      font-family: 'Barlow';
      font-size: 20px;
      color: #4A4A4A;
      letter-spacing: 0.25px;
      text-align: left;
      line-height: 36px;
    }
    }
}
  @media(min-width: 764px) {
    flex-direction: row;
    .left {
      padding: 30px 0 30px 90px;
      width: 60%;
    }
    button {
      font-size: 18px !important;
      margin-right: 15px;
      padding: 10px 20px;
    }
    .right {
      top: -40px;
      text-align: right;
      justify-content: center;
      padding: 20px;
      width: 40%;
      .call-to-action {
        margin-left: 0;
        margin-right: auto;
        max-width: 500px;
      }
      p {
        font-size: 24px;
      }
      .call-to-action-buttons {
        display: flex;
        justify-content: flex-start;
      }
    }
  }
`

import React from 'react';

import styled from 'styled-components';
import Button from './_common/Button';

const Hero = ({ className }) => (
  <section className={className}>
    <div className="column left">
      <div className="text-statements">
        <h1>Music.</h1>
        <h2>Enjoyment</h2>
        <h2>Development</h2>
        <h2>Self-expression</h2>
        <h2>Confidence</h2>
      </div>
    </div>
    <div className="column right">
      <div className="call-to-action">
        <p>Based in Bath and the surrounding areas, we offer exciting and affordable opportunities for
          keyboard and piano classes.
          Get started with The Music House by booking <strong>a free trial lesson</strong> today.</p>
        <div className="call-to-action-buttons">
          <a href="/#book"><Button label="Book a lesson" isPrimary/></a>
          <a href="/methodology/#group"><Button label="Group sessions"/></a>
        </div>
      </div>
    </div>
  </section>
);

export default styled(Hero)`
display: flex;
flex-direction: column;
width: 100%;
box-sizing: border-box;
background: #86CDCA;
a {
  text-decoration: none;
}
.call-to-action-buttons {
  display: flex;
  flex-wrap: wrap;
  * {
    margin-top: 10px;
  }
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
      color: #029D9E;
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

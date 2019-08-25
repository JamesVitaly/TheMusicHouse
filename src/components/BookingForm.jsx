import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './_common/Input';
import Select from './_common/Select';
import Button from './_common/Button';

const options = [
  { label: "Group", value: 'group' },
  { label: "Individual", value: 'individual' },
]
const BookingForm = ({ className }) => (
  <section className={className}>
    <h1>Book it.</h1>
    <div className="booking-form">
      <div className="form booking-form-phone">
        <h3>Phone me on
        07908117345
        or fill out the form
        and I’ll get in touch with you
      </h3>
      </div>
      <div className="form booking-form-form">
        <Input label="Email address"/>
        <Input label="Phone number (optional)"/>
        <Select label="Session type" options={options}/>
        <Button isPrimary label="Submit"/>
      </div>
    </div>
  </section>
);


export default styled(BookingForm)`
  margin: 100px;
  h1 {
    font-family: 'Barlow';
    font-size: 54px;
    font-weight: bold;
    color: #4A4A4A;
    text-align: center;
  }
  button {
    width: 300px;
    margin-top: 20px;
  }
  h3 {
    font-family: 'Barlow';
    font-size: 44px;
    font-weight: 400;
    color: #4A4A4A;
    text-align: center;
  }
  .form {
    width:100%;
  }
  display: flex;
  flex-direction: column;
  .booking-form {
    display: flex;
    flex-direction: column;
  }
  @media(min-width: 764px) {
    .form {
      width: 50%;
    }
    h1 {
    font-size: 80px;
    }
    h3 {
      font-size: 64px;
      max-width: 540px;
    }
    .booking-form {
      flex-direction: row;
    }
  }
`;

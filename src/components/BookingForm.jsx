import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './_common/Input';
import Textarea from './_common/Textarea';
import Select from './_common/Select';
import Button from './_common/Button';

const options = [
  { label: "Group", value: 'group' },
  { label: "Individual", value: 'individual' },
  { label: "Not applicable", value: 'n/a'}
]

const BookingForm = ({ className }) => {
  const [emailError, setEmailError] = useState(false);
  const submitContactForm = (form) => {
    form.preventDefault();
    console.log(form);
    const email = document.querySelector('[name="email"]').value;
    const phone = document.querySelector('[name="phone"]').value;
    const session = document.querySelector('[name="session"]').value;
    const comments = document.querySelector('[name="comments"]').value;
    if(email) {
      // submit
    } else {
      setEmailError(true)
    }
  }
  return (
    <section id="book" className={className}>
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
          <form method="POST" onSubmit={(e) => submitContactForm(e)}>
            <Input onChange={() => setEmailError(false)} name="email" label="Email address"/>
            {emailError && <p className="error">Please add an email address</p>}
            <Input name="phone" label="Phone number (optional)"/>
            <Select name="session" label="Session type" options={options}/>
            <Textarea name="comments" label="Comments (optional)" />
            <Button isSubmit isPrimary label="Submit"/>
          </form>
        </div>
      </div>
    </section>
  );
}


export default styled(BookingForm)`
  .error {
    color: red;
    font-family: 'Barlow';
    padding: 0;
    margin: 0;
  }
  margin: 100px 20px;
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
  .booking-form-phone {
    padding-top: 50px;
  }
  @media(min-width: 764px) {
    margin: 100px;
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

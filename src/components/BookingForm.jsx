import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './_common/Input';
import Textarea from './_common/Textarea';
import Select from './_common/Select';
import Button from './_common/Button';
import sendToAirtable from '../modules/airtable';

const options = [
  { label: "Group", value: 'group' },
  { label: "Individual", value: 'individual' },
  { label: "Not applicable", value: 'n/a'}
]

const BookingForm = ({ className }) => {
  const [emailError, setEmailError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const submitContactForm = (form) => {
    form.preventDefault();
    console.log(form);
    setLoading(true);
    const email = document.querySelector('[name="email"]').value;
    const phone = document.querySelector('[name="phone"]').value;
    const session = document.querySelector('[name="session"]').value;
    const comments = document.querySelector('[name="comments"]').value;
    if(email) {
      const fields = {
        email,
        phone,
        session,
        comments,
      }
      sendToAirtable({ fields, table: 'music-house-contacts', airBase: 'appgOZ8ASBYyFF26K' })
      .then((res) => {
        console.log(res);
        setLoading(false)
        setFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
    } else {
      setLoading(false)
      setEmailError(true)
    }
  }
  return (
    <section id="book" className={className}>
      <h1>Book it.</h1>
      <div className="booking-form">
        <div className="form booking-form-phone">
          <h3>Interested? Just fill out the
          contact form and I’ll get in
          touch with you as
          soon as possible
        </h3>
        </div>
        <div className="form booking-form-form">
          {!formSubmitted ?
            <form method="POST" onSubmit={submitContactForm}>
              <Input onChange={() => setEmailError(false)} name="email" label="Email address"/>
              {emailError && <p className="error">Please add an email address</p>}
              <Input name="phone" label="Phone number (optional)"/>
              <Select name="session" label="Session type" options={options}/>
              <Textarea name="comments" label="Comments (optional)" />
              <Button isSubmit isLoading={loading} isPrimary label="Submit"/>
            </form> :
            <div className="form-submitted">
              <i className="fas fa-check-circle" />
              <p>Submitted</p>
              <h4>Thanks, I'll get in touch with you very soon!</h4>
            </div>
            }
        </div>
      </div>
    </section>
  );
}


export default styled(BookingForm)`
background: #86CDCA;
width: 100%;
p {
  font-family: 'Barlow';
  margin-bottom: 10px;
}
i {
  margin-bottom: 10px;
  font-size: 24px;
}
  .error {
    color: red;
    font-family: 'Barlow';
    padding: 0;
    margin: 0;
  }
  padding: 100px 20px;
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
    padding: 30px;
  }
  display: flex;
  flex-direction: column;
  .booking-form {
    display: flex;
    margin: 20px 0;
    flex-direction: column;
  }
  .booking-form-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  }
  .booking-form-phone {
    padding-top: 50px;
  }
  .form-submitted {
    background: #D8D8D8;
    padding: 20px;
    text-align: center;
  }
  @media(min-width: 992px) {
    padding: 100px;
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

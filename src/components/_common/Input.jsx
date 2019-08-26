import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({ className, label, name, onChange }) => (
  <div className={className}>
    <label>{label}</label>
    <input onChange={onChange} name={name} type="text"></input>
  </div>
);

export default styled(Input)`
  width: 100%;
  margin: 20px 0;
  label {
    font-size: 24px;
    font-family: 'Barlow';
    color: #4A4A4A;
  }
  input {
    padding: 10px
    background: #D8D8D8;
    height: 60px;
    border: none;
    width: 100%;
    font-size: 24px;
    font-family: 'Barlow';
    color: #4A4A4A;
  }
`;

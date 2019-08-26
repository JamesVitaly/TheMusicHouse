import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({ className, label, name }) => (
  <div className={className}>
    <label>{label}</label>
    <textarea name={name} rows={20} type="text"></textarea>
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
  textarea {
    background: #D8D8D8;
    height: 160px;
    padding: 10px;
    border: none;
    width: 100%;
    font-size: 24px;
    font-family: 'Barlow';
    color: #4A4A4A;
  }
`;

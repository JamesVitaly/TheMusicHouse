import React from 'react';

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
    color: #FFFFFF;
  }
  input {
    padding: 10px;
    background: #E8F3F1;
    height: 60px;
    border: none;
    width: 100%;
    font-size: 24px;
    font-family: 'Barlow';
    color: #4A4A4A;
  }
`;

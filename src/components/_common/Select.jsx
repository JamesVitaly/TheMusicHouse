import React from 'react';
import styled from 'styled-components';


const Select = ({ className, label, options, name }) => (
  <div className={className}>
    <label>{label}</label>
    <select name={name}>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

export default styled(Select)`
  width: 100%;
  margin: 20px 0;
  label {
    font-size: 24px;
    font-family: 'Barlow';
    color: #FFFFFF;
  }
  select {
    background: #E8F3F1;
    height: 60px;
    border: none;
    width: 100%;
    font-size: 24px;
    font-family: 'Barlow';
    color: #4A4A4A;
    border-radius: 0px;
  }
`;

import React from 'react';
import styled from 'styled-components';


const Select = ({ className, label, options }) => (
  <div className={className}>
    <label>{label}</label>
    <select>
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
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
    color: #4A4A4A;
  }
  select {
    background: #D8D8D8;
    height: 60px;
    border: none;
    width: 100%;
    font-size: 24px;
    font-family: 'Barlow';
    color: #4A4A4A;
    border-radius: 0px;
  }
`;

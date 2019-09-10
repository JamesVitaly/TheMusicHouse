import React from 'react';

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
    color: #FFFFFF;
  }
  textarea {
    background:#E8F3F1;
    height: 160px;
    padding: 10px;
    border: none;
    width: 100%;
    font-size: 24px;
    font-family: 'Barlow';
    color: #4A4A4A;
  }
`;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = ({ onClick, isPrimary, className, label, isSubmit }) => (
  <button className={className} type={isSubmit ? "submit" : "button"}>
    {label}
  </button>
);


export default styled(Button)`
  background: ${ ({isPrimary}) => isPrimary ? '#D8D8D8': 'none'};
  border:  ${({isPrimary}) => isPrimary ? '4px solid #D8D8D8': '4px solid #979797'};
  font-size: 18px;
  font-family: 'Barlow';
  margin-right: 10px;
  font-weight: 500;
  padding: 10px 15px;
  cursor: pointer
  @media(min-width: 764px) {
    font-size: 22px;
  }
  @media(min-width: 992px) {
    font-size: 24 px;
  }
`;

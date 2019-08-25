import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = ({ onClick, isPrimary, className, label }) => (
  <button className={className} isPrimary={isPrimary}>
    {label}
  </button>
);


export default styled(Button)`
  background: ${ ({isPrimary}) => isPrimary ? '#D8D8D8': 'none'};
  border:  ${({isPrimary}) => isPrimary ? '4px solid #D8D8D8': '4px solid #979797'};
  font-size: 16px;
  font-family: 'Barlow';
  margin-right: 10px;
  padding: 10px 15px;
  cursor: pointer
  @media(min-width: 764px) {
    font-size: 18px;
  }
  @media(min-width: 992px) {
    font-size: 22 px;
  }
`;

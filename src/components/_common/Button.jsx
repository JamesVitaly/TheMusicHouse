import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loading from './Loading';

const Button = ({ onClick, isPrimary, className, label, isSubmit, isLoading }) => (
  <button className={className} type={isSubmit ? "submit" : "button"}>
    {isLoading && <Loading />}{label}
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
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media(min-width: 764px) {
    font-size: 22px;
  }
  @media(min-width: 992px) {
    font-size: 24 px;
  }
`;

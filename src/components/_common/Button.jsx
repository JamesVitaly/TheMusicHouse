import React from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const Button = ({ onClick, isPrimary, className, label, isSubmit, isLoading }) => (
  <button className={className} type={isSubmit ? "submit" : "button"}>
    {isLoading && <Loading />}{label}
  </button>
);


export default styled(Button)`
  background: ${ ({isPrimary}) => isPrimary ? '#E27D5F': '#C38D9D'};
  border-radius: 2px;
  border:  ${({isPrimary}) => isPrimary ? '4px solid #E27D5F': '4px solid #C38D9D'};
  color:  ${({isPrimary}) => isPrimary ? 'white': 'white'};
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
    font-size: 26 px;
  }
`;

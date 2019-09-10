import React from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const Button = ({ onClick, isPrimary, className, label, isSubmit, isLoading }) => (
  <button className={className} type={isSubmit ? "submit" : "button"}>
    {isLoading && <Loading />}{label}
  </button>
);


export default styled(Button)`
  background: ${ ({isPrimary}) => isPrimary ? '#E27D5F': '#029D9E'};
  border-radius: 2px;
  border:  ${({isPrimary}) => isPrimary ? '4px solid #E27D5F': '4px solid #029D9E'};
  color:  ${({isPrimary}) => isPrimary ? 'white': 'white'};
  font-size: 18px;
  font-family: 'Barlow';
  margin-right: 10px;
  font-weight: 500;
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  @media(min-width: 764px) {
    font-size: 22px;
  }
  @media(min-width: 992px) {
    font-size: 26 px;
  }
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

import React from 'react';
import styled from 'styled-components'

const Loading = ({ className }) => (
  <div className={className}>
    <div className="Loading__spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  </div>
);

export default styled(Loading)`
@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
}
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

.Loading__spinner {
  margin-right: 10px;
  width: 70px;
  text-align: center;
}

.Loading__spinner > div {
  width: 14px;
  height: 14px;
  background-color: #4A4A4A;

  border-radius: 100%;
  display: inline-block;
  animation: sk-bouncedelay 1.2s infinite ease-in-out both;
}

.Loading__spinner .bounce1 {
  animation-delay: -0.32s;
}

.Loading__spinner .bounce2 {
  animation-delay: -0.16s;
}
`;

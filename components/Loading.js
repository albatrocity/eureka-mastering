import React from 'react'
import styled from 'styled-components'

const Spinner = styled.div`
  width: 40px;
  height: 40px;

  position: relative;
  margin: 0 auto;
`

const DblBounce1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${p => p.color || '#333'};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }

  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
`

const DblBounce2 = DblBounce1.extend`
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
`

const Loading = ({ color }) => (
  <Spinner>
    <DblBounce1 color={color} />
    <DblBounce2 color={color} />
  </Spinner>
)

export default Loading

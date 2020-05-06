import React from 'react';
import styled from 'styled-components';

const sizes = {
  p: 24,
  m: 56,
  g: 86,
}

const TitleFade = styled.p`
  font-size: ${({ size }) => sizes[size]}px;
  color: white;
  z-index: 3;
  width: 0;
  overflow: hidden;
  animation-name: exibition, label;
  animation-delay: 4s, 8s;
  animation-duration: 4s;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: forwards;
  text-align: center;
  height: ${({ size }) => sizes[size]*1.5}px;
  margin: 0;

  @keyframes exibition {    
    from {width: 0;}
    to {width: 100%;}
  }

  @keyframes label {
    0%{
      font-style: normal;
      color: white;
    }
    15%{
      font-style: normal;
      color: white;
    }
    20%{
      font-style: italic;
      color: yellow;
    }
    25%{
      font-style: normal;
      color: white;
    }
    30%{
      font-style: italic;
      color: yellow;
    }
    35%{
      font-style: normal;
      color: white;
    }
    60%{
      font-style: normal;
      color: white;
    }
    65%{
      font-style: italic;
      color: yellow;
    }
    70%{
      font-style: normal;
      color: white;
    }
    75%{
      font-style: italic;
      color: yellow;
    }
    80%{
      font-style: normal;
      color: white;
    }
    90%{
      font-style: italic;
      color: yellow;
    }
    100%{
      font-style: normal;
      color: white;
    }
  }
`;

const TitleNonFade = styled.p`
  font-size: ${({ size }) => sizes[size]}px;
  color: white;
  z-index: 3;
  overflow: hidden;
  animation-name: label;
  animation-delay: 2s;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  text-align: center;
  height: ${({ size }) => sizes[size]*1.5}px;
  margin: 0;

  @keyframes label {
    0%{
      font-style: normal;
      color: white;
    }
    15%{
      font-style: normal;
      color: white;
    }
    20%{
      font-style: italic;
      color: yellow;
    }
    25%{
      font-style: normal;
      color: white;
    }
    30%{
      font-style: italic;
      color: yellow;
    }
    35%{
      font-style: normal;
      color: white;
    }
    60%{
      font-style: normal;
      color: white;
    }
    65%{
      font-style: italic;
      color: yellow;
    }
    70%{
      font-style: normal;
      color: white;
    }
    75%{
      font-style: italic;
      color: yellow;
    }
    80%{
      font-style: normal;
      color: white;
    }
    90%{
      font-style: italic;
      color: yellow;
    }
    100%{
      font-style: normal;
      color: white;
    }
  }
`;

const text = 'CYBERPUNK';

const Title = ({ className, fade, size }) => (
  <>
    {fade ? <TitleFade className={className} size={size}>{text}</TitleFade> : <TitleNonFade className={className} size={size}>{text}</TitleNonFade> }
  </>
);

export default Title;

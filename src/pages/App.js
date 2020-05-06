import React from 'react';
import styled from 'styled-components' 
import background from '../assets/background.jpg';
import '../styles/App.css';

const Background = styled.div`
  background-image: url(${background});
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
`;

const Overflow = styled.div`
  background-color: rgba(0, 0, 0, .8);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  z-index: 2;
  animation-name: shade;
  animation-duration: 6s;

  @keyframes shade {
    from {background-color: rgba(0, 0, 0, 0);}
    to {background-color: rgba(0, 0, 0, .8);}
  }
`;

const Title = styled.h1`
  font-size: 86px;
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
  height: 128px;
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

const Button = styled.div`
  font-size: 20px;
  color: white;
  z-index: 3;
  width: 100%;
  opacity: 0;
  overflow: hidden;
  animation-name: button;
  animation-delay: 12s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  text-align: center;
  text-decoration: underline;
  text-transform: lowercase;
  cursor: pointer;

  @keyframes button {    
    from {opacity: 0;}
    to {opacity: 100%;}
  }
`;

const Page = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => (
  <Page>
    <Background />
    <Overflow />
    <Title>CYBERPUNK</Title>
    <Button>Vamos lá</Button>
  </Page>
);

export default App;

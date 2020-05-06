import React from 'react';
import styled from 'styled-components';
import { Link, Prompt } from 'react-router-dom';
import background from '../assets/background.jpg';
import main from '../assets/main.mp3';
import Background from '../components/Background';
import Title from '../components/Title';

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

const App = () => {
  const audio = new Audio(main);
  audio.play();

  return <Page>
    <Prompt
      message={() => audio.pause()}
    />
    <Background background={background} animation/>
    <Title size="g" fade />
    <Button><Link to="/home">Vamos lá</Link></Button>
    <div>
      <audio src='../assets/main.mp3' autoPlay/>
    </div>
  </Page>
};

export default App;

import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpg';
import Background from '../components/Background';
import { Link, useHistory } from 'react-router-dom';

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
  z-index: 2;
`;

const Welcome = styled.h1`
  color: white;
  margin-top: 0px;
  margin-bottom: 10px;
`;
const Label = styled.h1`
  color: white;
  margin-top: 0px;
  margin-bottom: 50px;
`;
const Text = styled.h2`
  color: white;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 40vh;
  background-color: rgba(0,0,0,.7);
  border: 5px solid rgb(0,180,180);
  position: relative;
`;

const CardInverted = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 40vh;
  background-color: rgb(0, 0, 0, .7);
  border: 5px solid rgba(180, 180, 0);
  position: relative;
`;

const Player = () => {
  const history = useHistory();
  const getFile = (bla) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      localStorage.setItem('player-profile', JSON.stringify(reader.result));
      history.push('/role');
    });
    reader.readAsText(bla.target.files[0], 'UTF-8');
  }

  return <>
    <Background background={background} watermark back="/home" />
    <Page>
      <Welcome>bem-vindo, jogador :)</Welcome>
      <Label>por favor, selecione uma das opcoes abaixo</Label>
      <Container augmented-ui='tl-clip br-clip exe'>
        <input id="file-input" type="file" name="name" onChange={getFile} style={{display: 'none'}} />
        <CardInverted onClick={() => document.getElementById('file-input').click()}>
          <Text>insira um cartucho de realidade aumentada</Text>
        </CardInverted>
        <Card onClick={() => localStorage.setItem('player-profile', '')} to="/role">
          <Text>crie um novo cartucho</Text>
        </Card>
      </Container>
    </Page>
  </>
};

export default Player;

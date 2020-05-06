import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpg';
import Background from '../components/Background';
import player from '../assets/player.png';
import master from '../assets/master.png';
import { Link } from 'react-router-dom';

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

const Label = styled.h1`
  color: white;
  margin-bottom: 50px;
  margin-top: 0px;
`;

const Text = styled.h2`
  color: white;
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
  height: 60vh;
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
  height: 60vh;
  background-color: rgb(0, 0, 0, .7);
  border: 5px solid rgba(180, 180, 0);
  position: relative;
`;

const Image = styled.img`
  margin-top: 10px;
  position: relative;
  height: 80%;
`;

const Home = () => (
  <>
    <Background background={background} watermark />
    <Page>
      <Label>qual seu caminho</Label>
      <Container augmented-ui='tl-clip br-clip exe'>
        <Card to="/player">
          <Image src={player} />
          <Text>jogador</Text>
        </Card>
        <CardInverted to="/master">
          <Image src={master} />
          <Text>mestre</Text>
        </CardInverted>
      </Container>
    </Page>
  </>
);

export default Home;

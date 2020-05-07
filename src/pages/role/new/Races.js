import React from 'react';
import styled from 'styled-components';
import ReactCardCarousel from 'react-card-carousel';
import races from '../../../content/races';
import RaceCard from './RaceCard';

const Label = styled.h2`
  color: white;
  margin-top:30px;
  width: 70%;
  text-align: center;
`;

const Button = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 10%;
  color: white;
  padding: 10px;
  background-color: black;
  border: 2px solid rgba(180, 180, 0);
`;

const Races = ({raceSelected, setRace, setStep }) => (
  <>
    <Label>{races.title}</Label>
    <ReactCardCarousel>
      {races.races.map((element, i) => (
        <RaceCard
          onClick={() => setRace(element.id)}
          selected={raceSelected === element.id}
          inverted={i % 2 === 0}
          {...element} />
      ))}
    </ReactCardCarousel>
    <Button onClick={() => setStep(1)}>continuar</Button>
  </>
);

export default Races;

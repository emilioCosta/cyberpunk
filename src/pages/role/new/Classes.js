import React from 'react';
import styled from 'styled-components';
import ReactCardCarousel from 'react-card-carousel';
import classes from '../../../content/classes.js';
import ClassCard from './ClassCard';

const Label = styled.h2`
  color: white;
  margin-top:30px;
  width: 70%;
  text-align: center;
`;

const Button = styled.div`
  cursor: pointer;
  color: white;
  padding: 10px;
  background-color: black;
  margin: 0 30px;
  border: 2px solid rgba(180, 180, 0);
`;

const Buttons = styled.div`
  position: absolute;
  display: flex;
  bottom: 10%;
`;

const Classes = ({ raceSelected, classSelected, setClass, setStep }) => (
  <>
    <Label>{classes.title}</Label>
    <ReactCardCarousel>
      {classes.classes.map((element, i) => (
        element.available.includes(raceSelected)
        && <ClassCard
          onClick={() => setClass(element.id)}
          selected={classSelected === element.id}
          inverted={i % 2 === 0}
          {...element} />
      ))}
    </ReactCardCarousel>
    <Buttons>
        <Button onClick={() => setStep(0)}>voltar</Button>
        <Button onClick={() => setStep(2)}>continuar</Button>
    </Buttons>
  </>
);

export default Classes;

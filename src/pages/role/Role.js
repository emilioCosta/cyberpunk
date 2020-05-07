import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import background from '../../assets/background.jpg';
import Background from '../../components/Background';
import Races from './new/Races';
import Classes from './new/Classes';

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

const Role = () => {
  const [content, setContent] = useState({});
  const [raceState, setRaceState] = useState(0);
  const [classState, setClassState] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const localValue = localStorage.getItem('player-profile');
    setContent(localValue ? JSON.parse(localValue) : localValue);
  });

  return <>
    <Background background={background} watermark back="/player" />
    <Page>
      {step === 0 && <Races raceSelected={raceState} setRace={setRaceState} setStep={setStep}/>}
      {step === 1 && <Classes raceSelected={raceState} classSelected={classState} setClass={setClassState} setStep={setStep}/>}
    </Page>
  </>
};

export default Role;

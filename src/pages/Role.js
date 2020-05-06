import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpg';
import Background from '../components/Background';

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
`;

const Role = () => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    const localValue = localStorage.getItem('player-profile');
    setContent(localValue ? JSON.parse(localValue) : localValue);
  });

  return <>
    <Background background={background} watermark back="/player" />
    <Page>
      <Label>{content ? 'preenchido' : 'novo'} </Label>
    </Page>
  </>
};

export default Role;

import React from 'react';
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

const Master = () => (
  <>
    <Background background={background} watermark back="/home" />
    <Page>
      <Label>master</Label>
    </Page>
  </>
);

export default Master;
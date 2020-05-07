import React from 'react';
import styled from 'styled-components';
import limitationsSlug from '../../../content/limitations';

const Title = styled.h2`
  color: white;
  text-align: center;
  margin-top: 0;
`;

const Description = styled.h5`
  color: white;
  text-align: justify;
  margin-top: 0;
`;

const Content = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40vw;
  height: 60vh;
  background-color: rgb(10, 10, 10, 1);
  border: 5px solid ${({ inverted, selected }) => selected ? '#fb2ad0' : (inverted ? 'rgb(0,180,180)' : 'rgba(180, 180, 0)')};
  position: relative;
`;

const Image = styled.img`
  margin-left: 10px;
  position: relative;
  height: 90%;
`;

const Box = styled.div`
  position: relative;
  height: 80%;
  width: inherit;
  margin-right: 10px;
  overflow: auto;
`;

const Information = styled.div`
  position: relative;
  height: 80%;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

const Limitations = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LimitationText = styled.h4`
  color: ${({ inverted, colored, selected }) => selected ? '#fb2ad0' : (!colored ? 'white' : (!inverted ? 'rgb(0,180,180)' : 'rgba(180, 180, 0)'))};
  margin: 5px 0;
`;

const RaceCard = ({ name, image, initialPoints, limitations, description, inverted, selected, onClick }) => (
    <Content selected={selected} inverted={inverted} onClick={onClick}>
      <Image src={image} />
      <Information>
        <Title>{name} [ +{initialPoints} pts ]</Title>
        <Box>
          <Description>{description}</Description>
        </Box>
        <Limitations>
          {Object.keys(limitations).map(limitation => (
            <div>
              <LimitationText inverted={inverted} selected={selected}  colored>{limitationsSlug[limitation]}</LimitationText>
              <LimitationText>{limitations[limitation]}</LimitationText>
            </div>
          ))}
        </Limitations>
      </Information>
    </Content>
  )

export default RaceCard;

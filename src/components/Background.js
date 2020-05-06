import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const StyledBackground = styled.div`
  background-image: url(${({ background }) => background});
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
`;

const OverflowNonAnimated = styled.div`
  background-color: rgba(0, 0, 0, .8);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  z-index: 2;
`;

const OverflowAnimated = styled.div`
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

const CustomTitle = styled(Title)`
  position: absolute;
  bottom: 15px;
  width: 100%;
`;

const Background = ({ background, animation, watermark }) => (
  <>
    <StyledBackground background={background} />
    {animation ? <OverflowAnimated /> : <OverflowNonAnimated /> }
    {watermark && <CustomTitle size="p" />}
  </>
);

export default Background
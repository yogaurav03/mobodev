import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../assets/Images/profile-img.png';
import {isMobile} from 'react-device-detect';

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
@media (max-width: 30em) {
    width: 70vw;
    flex-direction: column;
    justify-content: space-between;
    border-top: 2px solid ${props => props.theme.body};
    border-bottom: 2px solid ${props => props.theme.text};
    border-right-width: initial;
    border-left-width: initial;
    border-right-color: initial;
    border-left-color: initial;
    border-left: none;
    border-right: none;
    background: linear-gradient(rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) 0px 0px / 2px 100% no-repeat, linear-gradient(rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) 100% 0px;
}
height: 55vh;
display: flex;

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;

border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};
background-repeat: no-repeat;
background-size: 100% 2px;

z-index: 1;
`

const SubBox = styled.div`
width: 50%;
@media (max-width: 50em) {
    width: 100%;
    height: 50%;
}
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};

@media (max-width: 50em) {
    color: ${props => props.theme.text};
}

padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};

    @media (max-width: 50em) {
        color: ${props => `rgba(${props.theme.bodyRgba1},0.7)`};
    }

    font-size: calc(0.5em + 1.5vw);
    font-weight: 300;

}
`

const Intro = () => {
  return (
      <Box
      initial={{height: 0}}
      animate={{height: isMobile ? '70vh' : '55vh'}}
      transition={{type: 'spring', duration: 2, delay: 1}}
      >
          <SubBox>
              <Text>
                  <h1>Hi,</h1>
                  <h3>I'm Noobdev.</h3>
                  <h6>I Design and Code simple yet beautiful websites and apps.</h6>
              </Text>
          </SubBox>
          <SubBox>
              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, delay: 2}}
              >
                  <img className='pic' src={Me} alt='Profile Pic' />
              </motion.div>
          </SubBox>
      </Box>
  );
};

export default Intro;

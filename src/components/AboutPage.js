import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';
import img from '../assets/Images/spaceman.png';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;

@media (max-width: 40em) {
  right: none;
  left: 60%
}

widht: 20vw;
animation: ${float} 4s ease infinite;
img{
  width: 100%;
  height: auto;
  @media (max-width: 40em) {
    width: 50%;
  }
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backfrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubutntu Mono',monospace;
font-style: italic;

@media (max-width: 40em) {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: auto;
  backdrop-filter: none;
  margin-top: 2rem;
}
`



const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark'  />
        <SocialIcons theme='dark' />
        <PowerButton />
        <ParticleComponent theme='dark' />

        <Spaceman>
          <img src={img} alt='spaceman' />
        </Spaceman>

        <Main>
        We are Frontend + Backend + DevOps developers located in India. We love to create simple yet beautiful apps and websites with great user experience.
        <br /> <br />
        We are interested in the whole frontend + backend stack Like trying new things and building great projects. We are an independent freelancers. We love to create newest things for mankind.
        <br /> <br />
        We believe everything is an Art when you put your consciousness in it. You can connect with us via social links as well as mail.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
          
      </Box>
    </ThemeProvider>   
  );
};

export default AboutPage;

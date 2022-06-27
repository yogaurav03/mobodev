import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PowerButton from '../subComponents/PowerButton';
import Logo from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import { Link } from 'react-router-dom';
import { YinYang } from './AllSvgs';
import Intro from './Intro';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import Tour from 'reactour'

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h2,h3,h4,h5,h6{
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  @media (max-width: 30em) {
    font-size: 1em
  }
}
`

const Container = styled.div`
padding: 2rem;
.helper{
  line-height: 1.3;
  --reactour-accent: #5cb7b7;
  color: #2d2323;
}
`

const Contact = styled(Link)`
color: ${props => props.theme.text};
@media (max-width: 50em) {
  color: ${props => props.click ? props.theme.body : props.theme.text};
}
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`
const BLOG = styled(Link)`
color: ${props => props.theme.text};
@media (max-width: 50em) {
  color: ${props => props.click ? props.theme.body : props.theme.text};
  text-shadow: ${props => props.click ? 'rgb(0 0 0) 0px 0px 4px' : null};
}
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`

const WORK = styled(Link)`
color: ${props => props.click ? props.theme.body : props.theme.text};
@media (max-width: 50em) {
  text-shadow: ${props => props.click ? 'rgb(0 0 0) 0px 0px 4px' : null};
}
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0px;
right: 0px;
width: 100%;
display: flex;
justify-content: space-evenly;
@media (max-width: 50em) {
  bottom: 30px;
}
`

const ABOUT = styled(Link)`
color: ${props => props.click ? props.theme.body : props.theme.text};
@media (max-width: 50em) {
  color: ${props => props.theme.text};
}
text-decoration: none;
z-index: 1;
`

const SKILLS = styled(Link)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

transition: all 1s ease;

&>:first-child{
  animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
  display: ${props => props.click ? 'none' : 'inline-block'};
  padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
background-color: #000; 
top: 0;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
@media (max-width: 50em) {
  height: ${props => props.click ? '50%' : '0%'};
  right: 0px;
  width: ${props => props.click ? '100%' : '0%'};
  transition: width 0.5s ease 0s, height 1s ease 0.5s;
}
`

const Main = () => {

  const [click, setClick] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const handleClick = () => setClick(!click);

  const steps = [
    {
      selector: ".contact",
      content: "Click here to contact us via Mail.",
    },
    {
      selector: ".blog",
      content: "Click here to check our Team Members.",
    },
    {
      selector: ".work",
      content: "Click here to check our Professional Work.",
    },
    {
      selector: ".about",
      content: "Click here to check About Us.",
    },
    {
      selector: ".skills",
      content: "Click here to check our Skills.",
    },
  ];
  return (
    <MainContainer>
      <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={() => setIsTourOpen(false)}
          rounded={5}
        className='helper'
      />
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <Logo theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? isMobile ? 'light' : 'dark' : 'light'} />

        <Center click={click}>
          <YinYang onClick={() => handleClick()} width={click ? isMobile ? 40 : 120 : isMobile ? 120 : 200} height={click ? isMobile ? 40 : 120 : isMobile ? 120 : 200} fill='currentColor' />
          <span>click here</span>
        </Center>

        <Contact className='contact' click={click} target="_blank" to={{ pathname: "mailto:yogaurav03@gmail.com" }}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            Say hi..
          </motion.h2>
        </Contact>

        <BLOG to="/blog" className='blog' click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            Blog
          </motion.h2>
        </BLOG>

        <WORK to="/work" className='work' click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about" className='about' click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills" className='skills'>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>

      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;

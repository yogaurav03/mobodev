import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle';
import {isMobile} from 'react-device-detect';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

@media (max-width: 50em){
    flex-direction: column;
    padding: 8rem 0px;
    height: auto;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

@media (max-width: 50em){
  margin-bottom: 4rem;
  width: 50vw;
  height: max-content;
}

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

@media (max-width: 50em){
  font-size: calc(0.8em + 1vw);
  margin-bottom: 1rem;
}

${Main}:hover &{
  &>*{
    fill: ${props => props.theme.body};
  }
}

&>*:first-child{
  margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

@media (max-width: 50em){
  font-size: calc(0.5em + 1vw);
}

${Main}:hover &{
    color: ${props => props.theme.body};
}

strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}
ul,p{
  margin-left: 2rem;
}
`

const MySkillPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light'  />
        <SocialIcons theme='light' />
        <PowerButton theme='light'  />
        <ParticleComponent theme='light' />
        <Main>
            <Title>
              <Develope width={40} height={40} /> Frontend Developer
            </Title>
            <Description>
            We value business or brand for which we're creating, thus we enjoy bringing new ideas to life.
            </Description>
            <Description>
              <strong>
                Skills
              </strong>
              <p>
              React, Redux, Sass, Bootstrap, Firebase, AWS, Payment Gateway etc.
              </p>
            </Description>
            <Description>
              <strong>
                Tools
              </strong>
              <ul>
                <li>
                VScode, Github, Bitbucket, Webstorm Codepen etc.
                </li>
              </ul>
            </Description>
          </Main>
          <Main>
          <Title>
              <Develope width={40} height={40} /> Backend Developer
            </Title>
            <Description>
            We value business or brand for which we're creating, thus we enjoy bringing new ideas to life.
            </Description>
            <Description>
              <strong>
                Skills
              </strong>
              <p>
              Node, MySql, MongoDb, Express.
              </p>
            </Description>
            <Description>
              <strong>
                Tools
              </strong>
              <ul>
                <li>
                VScode, Github, Codepen etc.
                </li>
              </ul>
            </Description>
          </Main>
          {isMobile ? <Main>
            <Title>
              <Design width={40} height={40} /> Designer
            </Title>
            <Description>
              We love to create design which speaks, Keep it clean, minimal and simple.
            </Description>
            <Description>
              <strong>
                We like to Design
              </strong>
              <ul>
                <li>
                  Web Design
                </li>
                <li>
                  Mobile Apps
                </li>
              </ul>
            </Description>
            <Description>
              <strong>
                Tools
              </strong>
              <ul>
                <li>
                  Figma
                </li>
              </ul>
            </Description>
          </Main> : null}
          
          <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>   
  );
};

export default MySkillPage;

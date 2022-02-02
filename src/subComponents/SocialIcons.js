import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs';
import { DarkTheme } from '../components/Themes';
import {isMobile} from 'react-device-detect';

const Icons = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;
@media (max-width: 40em) {
    left: 1rem;
  }

z-index: 3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = (props) => {
  return (
      <Icons>
          <motion.div
          initial={{transform: "scale(0)"}}
          animate={{scale:[0,1,1.5,1]}}
          transition={{type: 'spring', duration: 1, delay: 1}}
          >
              <Link style={{color: 'inherit'}} target="_blank"  to={{pathname: "https://github.com/yogaurav03"}}>
                  <Github width={isMobile ? 20 : 25} height={isMobile ? 20 : 25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
              </Link>
          </motion.div>
          <motion.div
          initial={{transform: "scale(0)"}}
          animate={{scale:[0,1,1.5,1]}}
          transition={{type: 'spring', duration: 1, delay: 1.2}}
          >
              <Link style={{color: 'inherit'}} target="_blank"  to={{pathname: "https://www.instagram.com/noobdev.in/"}}>
                  <Twitter width={isMobile ? 20 : 25} height={isMobile ? 20 : 25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
              </Link>
          </motion.div>
          <motion.div
          initial={{transform: "scale(0)"}}
          animate={{scale:[0,1,1.5,1]}}
          transition={{type: 'spring', duration: 1, delay: 1.4}}
          >
              <Link style={{color: 'inherit'}} target="_blank"  to={{pathname: "https://www.facebook.com/"}}>
                  <Facebook width={isMobile ? 20 : 25} height={isMobile ? 20 : 25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
              </Link>
          </motion.div>
          <motion.div
          initial={{transform: "scale(0)"}}
          animate={{scale:[0,1,1.5,1]}}
          transition={{type: 'spring', duration: 1, delay: 1.6}}
          >
              <Link style={{color: 'inherit'}} target="_blank"  to={{pathname: "https://youtube.com"}}>
                  <YouTube width={isMobile ? 20 : 25} height={isMobile ? 20 : 25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
              </Link>
          </motion.div>

          <Line color={props.theme} 
          initial={
              {
                  height: 0
              }
          }
          animate={{
              height: isMobile ? '5rem' : '8rem'
          }}
          transition={{
              type: 'spring',
              duration: 1,
              delay: 0.8
          }}
          />
      </Icons>
  );
};

export default SocialIcons;

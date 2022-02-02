import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PowerBtn } from './../components/AllSvgs.js';
import {isMobile} from 'react-device-detect';

const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;
@media (max-width: 40em) {
  width: 2rem;
height: 2rem;
}

display: flex;
justify-content: center;
align-items: center;
z-index: 3;

cursor: pointer;

&:hover{
  background-color: rgba(0,255,0,0.4);
  box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}

&>*:first-child{
  text-decoration: none;
  color: inherit;
}
`

const PowerButton = () => {
  return (
      <Power>
        <Link to="/">
        <PowerBtn width={ isMobile ? 20 : 30} height={isMobile ? 20 : 30} fill='currentcolor' />
        </Link>
      </Power>
  );
};

export default PowerButton;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import renderHTML from 'react-render-html';
import moment from 'moment';

const Box = styled(motion(Link))`
width: calc(10rem + 15vw);
text-decoration: none;
height: 25rem;
padding: 1rem;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(2px);
box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
cursor: pointer;

@media (max-width: 30em) {
    width: calc(60vw);
    height: 25rem;
    padding: 0.8rem;
    backdrop-filter: none;
}

display: flex;
flex-direction: column;
z-index: 5;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
}
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 60%;

@media (max-width: 25em) {
    height: 70%;
}

background-size: cover;
border: 1px solid transparent;
background-position: center center;

${Box}:hover &{
    border: 1px solid ${props => props.theme.body};
}
`

const Title = styled.h3`
color: inherit;

@media (max-width: 25em) {
    font-size: calc(0.6em + 1vw);
}

padding: 0.5rem 0;
padding-top: 1rem;
font-family: 'Karla', sans-serif;
font-weight: 700;
border-bottom: 1px solid ${props => props.theme.text};

${Box}:hover &{
    border-bottom: 1px solid ${props => props.theme.body};
}
`

const DateView = styled.span`
padding: 0.5rem 0;
@media (max-width: 25em) {
    font-size: calc(0.5em + 1vw);
}
`

const Container = styled(motion.div)``;

const Item = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}


const BlogComponent = (props) => {
    const { title, date, imgSrc, link, excerpt } = props.blog;
    return (
        <Container
            variants={Item}
        >
            <Box target="_blank" to={{ pathname: link }}>
                <Image img={imgSrc} />
                <Title>{title?.rendered}</Title>
                <div>
                    {renderHTML(excerpt?.rendered)}
                </div>
                <DateView>
                {moment(new Date(date)).format("DD MMM YYYY")}
                </DateView>
            </Box>
        </Container>
    );
};

export default BlogComponent;

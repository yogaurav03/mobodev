import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import BlogComponent from './BlogComponent';
import AnchorComponent from '../subComponents/Anchor';
import BigTitle from '../subComponents/BigTitle';
import { motion } from 'framer-motion';
import axios from 'axios';

const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
@media (max-width: 30em){
    padding-top: 7rem;
}
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
@media (max-width: 50em){
  grid-template-columns: 100%;
}
grid-gap: calc(1rem + 2vw);
`

// Framer-motion config

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChilder: 0.5,
      duration: 0.5,
    }
  }
}

const BlogPage = () => {
  
  const [numbers, setNumbers] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const getBlog = async() => {
    const URL = 'wp-json/wp/v2/posts';
    const headers = {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },
    };
  
    await axios
      .get(URL, headers, {
        timeout: 3000,
        mode: "cors",
      })
      .then(async response => {
        setBlogs(response.data)
      })
      .catch(error => {
        console.log('#. getBlog', error);
      });
  }

  useEffect(() => {
    let num = (window.innerHeight - 70)/30;
    setNumbers(parseInt(num));
    getBlog();
  },[])

  return (
      <MainContainer
      variants={container}
      initial='hidden'
      animate='show'
      exit={{
        opacity: 0, transition: {duration: 0.5}
      }}
      >
        <Container>
          <LogoComponent />
          <PowerButton />
          <SocialIcons />
          <AnchorComponent numbers={numbers} />
          <Center>
            <Grid>
              {
                blogs.map(blog => {
                  return <BlogComponent key={blog.id} blog={blog} />
                })
              }
            </Grid>
          </Center>
          
          <BigTitle text="BLOG" top="5rem" left="5rem" />

        </Container>
      </MainContainer>
  );
};

export default BlogPage;

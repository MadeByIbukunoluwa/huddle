import { Container } from './styles/Container.styled'
import Socialicons from './Socialicons'
import { Flex } from './styles/flex.styled'

import React from 'react'

import { StyledFooter } from './styles/Footer.styled'
const footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
      <Flex>
        <ul>
          <li>
            Want to know more about how you too can use huddle to build awesome communities? <br></br>Have a proposition? <br></br>or want to reach out to our team ? send a message to the number or send a mail to the address below
          </li>
          <li>+1-543-123-4567</li>
          <li>example@huddle.com</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>

        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <Socialicons/>
        </Flex>
        <p> &copy 2021 Huddle.All rights reserved</p>
        </Container>
      </StyledFooter>
  );
}

export default footer
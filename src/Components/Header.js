import React from 'react'
import { StyledHeader, Nav, Logo,Image } from "./styles/Header.styled";
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'
import { Flex } from './styles/flex.styled'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          {/* <Logo src="../../public/Images/logo.svg" alt = ""/> */}
          {/* <Logo src={process.env.PUBLIC_URL + '/Images/logo.svg'}alt = ""/> */}
          <Logo src="/Images/logo.svg" alt = ""/>
          
          <Button>Try it free </Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p> Huddle re-imagines the way we build communities.You have a voice, but so deos your audience. Create connections with your users as you engage in genuine discussions 
            </p>
              <Button bg = "#ff0099" color= "fff">Get Started For Free</Button>
          </div>
          <Image src = "/Images/illustration-mockups.svg" alt = ""/>
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header
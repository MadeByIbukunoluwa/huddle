import {FaTwitter,FaLinkedin,FaFacebook} from "react-icons/fa"

import React from 'react'
import { StyledSocialIcons } from "./styles/Socialicon.styled"

const Socialicons = () => {
  return (
    <StyledSocialIcons>
        <li><a href="https/twitter.com"><FaTwitter/></a></li>
        <li><a href="https/twitter.com"><FaFacebook/></a></li>
        <li><a href="https/twitter.com"><FaLinkedin/></a></li>
    </StyledSocialIcons>
  )
}

export default Socialicons
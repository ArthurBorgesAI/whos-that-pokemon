import React from 'react'

import logo from "../../assets/pokemon-logo.png";

import { HeaderContainer, Img } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
        <Img src={logo} alt="Pokemon logo" />
        <h2>Quem é esse Pokemon?</h2>
    </HeaderContainer>
  )
}

export default Header
import React from 'react'
import { Background,Img } from './styles'

const HiddenImg = ({image}) => {
  return (
    <>
        <Background>
          <Img src={image}/>
        </Background>
    </>
  )
}

export default HiddenImg
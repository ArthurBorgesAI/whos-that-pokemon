import React from 'react'
import { CustomButton, DisabledButton } from './styles';

const Button = ({text, role}) => {
  return (
    <>
    {role === 'disabled' 
    ?
    <DisabledButton disabled> {text} </DisabledButton>
    :
    <CustomButton onClick={role}> {text} </CustomButton>
    }
    </>
  )
}

export default Button
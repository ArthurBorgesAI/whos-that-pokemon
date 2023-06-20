import React from 'react'
import { Helper, IconContainer, StyledIcon } from './styles'

const TEXT = "'Como jogar \\a\\a Selecione a dificuldade\\a e clique no botão iniciar.\\a\\a -Fácil: 10 Pokemons\\a -Médio: 20 Pokemons\\a -Difícil: 30 Pokemons \\a\\a Durante o jogo: \\a\\a Uma imagem irá aparecer com o\\a Pokemon oculto, dentre as quatro opções\\a que serão dadas, você deverá selecionar\\a o nome correto do Pokemon em questão,\\a para seguir para a próxima etapa.\\a\\a Você vencerá assim que acertar o nome\\a de todos os Pokemons. \\a\\a Boa Sorte!  '";

const Help = () => {
  return (
    <Helper >
        <IconContainer $hovertext={TEXT}>
            <StyledIcon />
        </IconContainer>
    </Helper>
  )
}

export default Help;
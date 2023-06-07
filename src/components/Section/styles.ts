import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'titulo' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.fundo === 'preto' ? cores.preta : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.fundo === 'preto' ? cores.cinza : cores.preta};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const TituloLista = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`

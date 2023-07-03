import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.fundo === 'preto' ? cores.preta : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.fundo === 'preto' ? cores.cinza : cores.preta};
  }
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
`

export const TituloLista = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

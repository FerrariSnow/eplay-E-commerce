import { Container, TituloLista } from './styles'

export type Props = {
  title: string
  fundo: 'preto' | 'cinza'
  children: JSX.Element
}

const Section = ({ title, fundo, children }: Props) => (
  <Container fundo={fundo} title={title}>
    <div className="container">
      <TituloLista>{title}</TituloLista>
      {children}
    </div>
  </Container>
)

export default Section

import * as S from './styles'

export type Props = {
  title: string
  fundo: 'preto' | 'cinza'
  children: JSX.Element
}

const Section = ({ title, fundo, children }: Props) => (
  <S.Container fundo={fundo} title={title}>
    <div className="container">
      <S.ListTitle>{title}</S.ListTitle>
      {children}
    </div>
  </S.Container>
)

export default Section

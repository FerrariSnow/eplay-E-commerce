import * as S from './styles'

const AnoAtual = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de ação"
              to="/categories/#action"
            >
              Ação
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de esportes"
              to="/categories/#sports"
            >
              Esportes
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de simulação"
              to="/categories/#simulation"
            >
              Simulação
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de luta"
              to="/categories/#fight"
            >
              Luta
            </S.Link>
            <S.Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories/#rpg"
            >
              RPG
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>
          Acesso rápido
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar a seção de promoções"
                to="/#on-sale"
              >
                Promoções
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar a seção de 'em breve'"
                to="/#coming-soon"
              >
                Em breve
              </S.Link>
            </li>
          </S.Links>
        </S.SectionTitle>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>
          <p>{AnoAtual} - &copy; e-Play Todos os direitos reservados</p>
        </S.SectionTitle>
      </S.FooterSection>
    </div>
  </S.Container>
)

export default Footer

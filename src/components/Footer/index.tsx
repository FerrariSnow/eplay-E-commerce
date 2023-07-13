import { Container, FooterSection, SectionTitle, Links, Link } from './styles'

const AnoAtual = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categories/#action">Ação</Link>
            <Link to="/categories/#sports">Esportes</Link>
            <Link to="/categories/#simulation">Simulação</Link>
            <Link to="/categories/#fight">Luta</Link>
            <Link to="/categories/#rpg">RPG</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>
          Acesso rápido
          <Links>
            <li>
              <Link to="/#on-sale">Promoções</Link>
            </li>
            <li>
              <Link to="/#coming-soon">Em breve</Link>
            </li>
          </Links>
        </SectionTitle>
      </FooterSection>
      <FooterSection>
        <SectionTitle>
          <p>{AnoAtual} - &copy; e-Play Todos os direitos reservados</p>
        </SectionTitle>
      </FooterSection>
    </div>
  </Container>
)

export default Footer

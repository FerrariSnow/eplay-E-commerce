import { Container, FooterSection, SectionTitle, Links, Link } from './styles'

const AnoAtual = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>RPG</Link>
            <Link>Ação</Link>
            <Link>Aventura</Link>
            <Link>Esportes</Link>
            <Link>Estratégia</Link>
            <Link>Simulação</Link>
            <Link>FPS</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>
          Acesso rápido
          <Links>
            <li>
              <Link>Novidades</Link>
            </li>
            <li>
              <Link>Promoções</Link>
            </li>
            <li>
              <Link>Em breve</Link>
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

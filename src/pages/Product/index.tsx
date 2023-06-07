import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" fundo="preto">
        <p>
          Você é Geralt de Rívia, mercenário matador de monstros. O lugar é um
          continente devastado pela guerra e infestado de monstros que você pode
          explorar à vontade. Seu contrato atual? Encontrar Ciri, a Criança da
          Profecia — uma arma viva que pode alterar a forma do mundo. Contemple
          o mundo sombrio de fantasia do Continente como nunca antes! Esta
          edição de The Witcher 3: Wild Hunt foi aprimorada com inúmeras
          melhorias visuais e técnicas, inclusive com nível de detalhes
          elaborado, uma variedade de modificações criadas e recém-desenvolvidas
          pela comunidade para o jogo, traçado de raios em tempo real e muito
          mais — especialmente para o desempenho dos PCs mais modernos.
        </p>
      </Section>
      <Section title="Mais detalhes" fundo="cinza">
        <p>
          <b>Plataforma:</b> PC <br />
          <b>Desenvolvedor:</b> CD Projekt Red <br />
          <b>Distribuidora:</b> CD Projekt Red
          <br />
          <b>Idiomas:</b> O jogo possui suporte a diversos idiomas, incluindo
          inglês, Português, Francês, Italiano e Alemão. As opções de áudio e
          legenda podem ser ajustadas nas configurações do jogo.
        </p>
      </Section>
      <Gallery></Gallery>
    </>
  )
}

export default Product

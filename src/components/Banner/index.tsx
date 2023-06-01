import { Hero, Precos, Titulo } from './styles'
import bannerImg from '../../assets/images/banner-miranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Hero style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span> <br /> por apenas R$ 99,90
        </Precos>
      </div>
      <Button
        type="link"
        to="/produtos"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Hero>
)

export default Banner

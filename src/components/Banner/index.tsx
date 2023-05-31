import { Hero, Precos, Titulo } from './styles'
import bannerImg from '../../assets/images/banner-miranha.png'

const Banner = () => (
  <Hero style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
      <Precos>
        De <span>R$ 250,00</span> <br /> por apenas R$ 99,90
      </Precos>
    </div>
  </Hero>
)

export default Banner

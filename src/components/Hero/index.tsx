import HeroImg from '../../assets/images/herosimg/hero-witcher.jpg'
import Button from '../Button'
import Tag from '../Tag'
import { HeroProduct, Infos } from './styles'

const Hero = () => (
  <HeroProduct style={{ backgroundImage: `url(${HeroImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PC</Tag>
      </div>
      <Infos>
        <h2>The Witcher 3</h2>
        <p>
          <span>De R$79,99</span>
          Por R$ 18,99
        </p>
        <Button title="Adicionar ao carrinho" variant="primary" type="button">
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </HeroProduct>
)

export default Hero

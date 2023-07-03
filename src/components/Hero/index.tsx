import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { HeroProduct, Infos } from './styles'
import { formataPreco } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <HeroProduct style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formataPreco(game.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formataPreco(game.prices.old)}</>}
        </p>

        {game.prices.current && (
          <Button title="Adicionar ao carrinho" variant="primary" type="button">
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </HeroProduct>
)

export default Hero

import Game from '../../models/Game'
import Product from '../Product'

import { Container, Lista, TituloLista } from './styles'

export type Props = {
  titulo: string
  fundo: 'cinza' | 'preto'
  games: Game[]
}

const ProductsList = ({ titulo, fundo, games }: Props) => (
  <Container fundo={fundo}>
    <div className="container">
      <TituloLista>{titulo}</TituloLista>
      <Lista>
        {games.map((game) => (
          <Product
            key={game.id}
            titulo={game.titulo}
            categoria={game.categoria}
            OS={game.OS}
            descricao={game.descricao}
            image={game.image}
            infos={game.infos}
          />
        ))}
      </Lista>
    </div>
  </Container>
)

export default ProductsList

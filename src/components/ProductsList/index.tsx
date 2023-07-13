import { Game } from '../../pages/Home'
import Product from '../Product'

import { Container, Lista, TituloLista } from './styles'

export type Props = {
  title: string
  fundo: 'cinza' | 'preto'
  games: Game[]
  id?: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ title, fundo, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }

  return (
    <Container id={id} fundo={fundo}>
      <div className="container">
        <TituloLista>{title}</TituloLista>
        <Lista>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                key={game.id}
                title={game.name}
                category={game.details.category}
                system={game.details.system}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
              />
            </li>
          ))}
        </Lista>
      </div>
    </Container>
  )
}

export default ProductsList

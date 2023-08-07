import { Game } from '../../pages/Home'
import Product from '../Product'
import { parseToBrl } from '../../utils'

import * as S from './styles'
import Loader from '../Loader'

export type Props = {
  title: string
  fundo: 'cinza' | 'preto'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ title, fundo, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container id={id} fundo={fundo}>
      <div className="container">
        <S.TituloLista>{title}</S.TituloLista>
        <S.Lista>
          {games &&
            games.map((game) => (
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
        </S.Lista>
      </div>
    </S.Container>
  )
}

export default ProductsList

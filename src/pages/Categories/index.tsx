import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simGames } = useGetSimGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()

  if (actionGames && fightGames && rpgGames && simGames && sportsGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          fundo="preto"
          id="action"
        />
        <ProductsList
          games={sportsGames}
          title="Esportes"
          fundo="cinza"
          id="sports"
        />
        <ProductsList
          games={simGames}
          title="Simulação"
          fundo="preto"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          fundo="cinza"
          id="fight"
        />
        <ProductsList games={rpgGames} title="RPG" fundo="preto" id="rpg" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories

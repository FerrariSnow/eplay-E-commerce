import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: simGames, isLoading: isLoadingSim } = useGetSimGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        fundo="preto"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        fundo="cinza"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={simGames}
        title="Simulação"
        fundo="preto"
        id="simulation"
        isLoading={isLoadingSim}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        fundo="cinza"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        fundo="preto"
        id="rpg"
        isLoading={isLoadingRPG}
      />
    </>
  )
}

export default Categories

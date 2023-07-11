import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'
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
        <ProductsList games={actionGames} title="Ação" fundo="preto" />
        <ProductsList games={sportsGames} title="Esportes" fundo="cinza" />
        <ProductsList games={simGames} title="Simulação" fundo="preto" />
        <ProductsList games={fightGames} title="Luta" fundo="cinza" />
        <ProductsList games={rpgGames} title="RPG" fundo="preto" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories

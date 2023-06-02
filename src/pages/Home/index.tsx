import { Banner } from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import rdr2 from '../../assets/images/rdr2.png'
import witcher3 from '../../assets/images/witcher3.png'
import hades from '../../assets/images/hades.png'
import hollowKnight from '../../assets/images/hollow-knight.png'
import baldurs3 from '../../assets/images/baldurs3.png'
import mk1 from '../../assets/images/mk1.png'
import hogwarts from '../../assets/images/hogwarts.png'
import riftApart from '../../assets/images/rift-apart.png'

const promocoes: Game[] = [
  {
    id: 1,
    titulo: 'The Witcher 3',
    categoria: 'RPG',
    descricao:
      'The Witcher 3: Wild Hunt é um RPG de ação em mundo aberto desenvolvido pela CD Projekt RED',
    OS: 'PC',
    image: witcher3,
    infos: ['80%', 'R$ 15,99']
  },
  {
    id: 2,
    titulo: 'Red Dead Redemption 2',
    categoria: 'Velho Oeste',
    descricao:
      'A épica aventura de mundo aberto da Rockstar Games aclamada pela crítica e o jogo mais bem avaliado desta geração de consoles',
    OS: 'PC',
    image: rdr2,
    infos: ['67%', 'R$ 78,87']
  },
  {
    id: 3,
    titulo: 'Hades',
    categoria: 'Roguelike',
    descricao:
      'Desafie o deus dos mortos enquanto você batalha para sair do Submundo',
    OS: 'PC',
    image: hades,
    infos: ['50%', 'R$ 23,74']
  },
  {
    id: 4,
    titulo: 'Hollow Knight',
    categoria: 'Metroidvania',
    descricao:
      ' Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis.',
    OS: 'PC',
    image: hollowKnight,
    infos: ['60%', 'R$ 11,19']
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    titulo: 'Baldurs Gate III',
    categoria: 'RPG',
    descricao:
      'a sequência do jogo de RPG Baldurs Gate II: Shadows of Amn. O jogo se situa no universo de Dungeons & Dragons, dentro do cenário de Forgotten Realms.',
    OS: 'PC',
    image: baldurs3,
    infos: ['08/23']
  },
  {
    id: 6,
    titulo: 'Ratchet & Clank: Rift Apart',
    categoria: 'Plataforma',
    descricao:
      'Pule de dimensão a dimensão com Ratchet e Clank para enfrentar um imperador maligno de outra realidade. Viaje por mundos repletos de ação, e além deles em velocidade alucinante, com visuais incríveis e um arsenal insano.',
    OS: 'PC',
    image: riftApart,
    infos: ['26/07']
  },
  {
    id: 7,
    titulo: ' Mortal Kombat 1',
    categoria: 'Luta',
    descricao:
      'Descubra um Universo renascido de Mortal Kombat criado pelo Deus do Fogo Liu Kang. Mortal Kombat 1 inaugura uma nova era da franquia icônica com um novo sistema de luta, modos de jogo e fatalities!',
    OS: 'PC',
    image: mk1,
    infos: ['19/09']
  },
  {
    id: 8,
    titulo: 'Hogwarts Legacy',
    categoria: 'Metroidvania',
    descricao:
      ' Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis. Explore cavernas serpenteantes, lute contra criaturas malignas e alie-se a insetos bizarros num estilo clássico 2D desenhado à mão.',
    OS: 'Nintendo Switch',
    image: hogwarts,
    infos: ['14/11']
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} titulo="Promoções" fundo="cinza" />
    <ProductsList games={emBreve} titulo="Em breve" fundo="preto" />
  </>
)

export default Home

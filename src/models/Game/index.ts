class Game {
  id: number
  titulo: string
  categoria: string
  OS: string
  descricao: string
  infos: string[]
  image: string

  constructor(
    id: number,
    titulo: string,
    categoria: string,
    OS: string,
    descricao: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.titulo = titulo
    this.categoria = categoria
    this.OS = OS
    this.descricao = descricao
    this.infos = infos
    this.image = image
  }
}

export default Game

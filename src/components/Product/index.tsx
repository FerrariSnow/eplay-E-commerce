import Tag from '../Tag'

import { Card, Titulo, Descricao, Infos } from './styles'

type Props = {
  titulo: string
  categoria: string
  OS: string
  descricao: string
  infos: string[]
  image: string
}

const Product = ({ titulo, categoria, OS, descricao, infos, image }: Props) => (
  <Card>
    <img src={image} alt={titulo} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{titulo}</Titulo>
    <Tag>{categoria}</Tag>
    <Tag>{OS}</Tag>
    <Descricao>{descricao}</Descricao>
  </Card>
)

export default Product

import witcher3 from '../../assets/images/herosimg/hero-witcher.jpg'

import { Itens, Item } from './styles'
const Gallery = () => (
  <Itens>
    <Item>
      <img src={witcher3} alt="Witcher 3" />
    </Item>
    <Item>
      <img src={witcher3} alt="Witcher 3" />
    </Item>
    <Item>
      <img src={witcher3} alt="Witcher 3" />
    </Item>
    <Item>
      <img src={witcher3} alt="Witcher 3" />
    </Item>
  </Itens>
)

export default Gallery

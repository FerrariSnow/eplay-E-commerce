import Section from '../Section'

import { Itens, Item, Action, Modal, ModalContent } from './styles'

import play from '../../assets/images/play.svg'
import zoom from '../../assets/images/zoom.svg'
import fechar from '../../assets/images/fechar.svg'
import witcher3 from '../../assets/images/herosimg/hero-witcher.jpg'
import rdr2 from '../../assets/images/herosimg/hero-rdr2.jpg'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: witcher3
  },
  {
    type: 'image',
    url: rdr2
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/qy8jmm9kY4A'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') {
      return item.url
    }
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') {
      return zoom
    }
    return play
  }

  return (
    <>
      <Section title="Galeria" fundo="preto">
        <Itens>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para ampliar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Itens>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Ícone de fechar" />
          </header>
          <img src={witcher3} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery

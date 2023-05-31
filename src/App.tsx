import Hero from './components/Banner'
import Header from './components/Header'
import { GlobalCSS } from './styles'

function App() {
  return (
    <>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      <Hero />
    </>
  )
}

export default App

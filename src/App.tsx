import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Hero from './components/Banner'
import Header from './components/Header'
import { GlobalCSS } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Hero />
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App

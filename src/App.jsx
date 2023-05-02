import Home from './pages/home/home'
// import { Dna } from  'react-loader-spinner'

import { NewsProvider } from './newsContext'

function App() {
  return (
    <NewsProvider>
      <Home />
    </NewsProvider>
  )
}

export default App

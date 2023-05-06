import Home from './pages/home/Home'

import { NewsProvider } from './newsContext'

function App() {
  return (
    <NewsProvider>
      <Home />
    </NewsProvider>
  )
}

export default App

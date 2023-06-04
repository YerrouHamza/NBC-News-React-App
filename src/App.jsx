import Home from './pages/home/Home'

import { NewsProvider } from './NewsContext'

function App() {
  return (
    <NewsProvider>
      <Home />
    </NewsProvider>
  )
}

export default App

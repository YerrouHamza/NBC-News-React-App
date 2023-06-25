import {BrowserRouter, Routes, Route } from 'react-router-dom'

// import Home from './pages/home/Home'
// import News from './pages/newsPage/News'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='/news/:category' element={<News />} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App

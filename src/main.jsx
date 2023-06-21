import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.scss'

import { NewsProvider } from './NewsContext' // import the Context state manager

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router/router'
import Product from './pages/product'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)

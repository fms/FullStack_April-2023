import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Card from './components/article/Card.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Card/>
  </React.StrictMode>,
)

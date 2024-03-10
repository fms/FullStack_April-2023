import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Box from './Box.tsx'
import Cursor from './cursor.tsx'
import Counter from './counter.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Box /> 
    <Cursor /> 
    <Counter />
  </React.StrictMode>,
)

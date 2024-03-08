import React from 'react'
import ReactDOM from 'react-dom/client'
import ChangeBackGround from './components/Easy/ChangeBG.tsx'
import CursorFollower from './components/Medium/cursorFollower.tsx'
import Counter from './components/Advanced/Counter.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChangeBackGround/>
    <CursorFollower/>
    <Counter/>
  </React.StrictMode>,
)

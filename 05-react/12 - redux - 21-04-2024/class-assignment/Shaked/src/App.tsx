
import './App.css'
import {  useSelector } from 'react-redux'
import Toolbar from './componenets/toolBar'
import { AppRootState } from './app/store'
import InputText from './componenets/input'
import BackGroundInput from './componenets/background'

function App() {
  const count = useSelector((state: AppRootState) => state.counter.count) 

  return (
    <>
      <div>
        <h1>{count}</h1>
        <Toolbar />
        <InputText/>
        <BackGroundInput/>
      </div>
    </>
  )
}

export default App

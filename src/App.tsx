import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'


function App() {

  return (
    <div className="App">
      <div className='window'>
        <Sidebar />
        <Routes>
          <Route />
          <Route />
        </Routes>
      </div>
    </div>
  )
}

export default App

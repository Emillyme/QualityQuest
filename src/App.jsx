import { useState } from 'react'
import './App.css'
import { Times } from './pages/Times'
import { MemoryGame } from './pages/MemoryGame'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {

  return (
    <div className="App">
      <Times/>
    </div>
  )
}

export default App

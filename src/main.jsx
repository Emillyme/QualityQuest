import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import { Perguntas } from './pages/Perguntas.jsx'
import './index.css'
import Vencedor from "./pages/Vencedor.jsx"
import { MemoryGame } from './pages/MemoryGame.jsx'
import PalavraOculta from './pages/PalavraOculta'; 


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

localStorage.setItem('pontuacao', JSON.stringify({ red: 0, blue: 0 }))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/perguntas",
    element: <Perguntas/>
  },
  {
    path: "/vencedor",
    element: <Vencedor/>
  },
  {
    path: "/memorygame",
    element: <MemoryGame/>
  },
  {
    path: "/palavraoculta",
    element: <PalavraOculta/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

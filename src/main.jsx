import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import { Perguntas } from './pages/Perguntas.jsx'
import './index.css'
import Vencedor from "./pages/Vencedor.jsx"


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Main.css'
import { TaskContextProvider } from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Utilizamos el TaskContextProvider para "englobar" toda la aplicación App y tene acceso a las tasks de forma global */}
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
)

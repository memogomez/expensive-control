import React from 'react'
import { ExpensiveFollowCard } from './ExpensiveCard.jsx'
import DataComponent from './Conexion.jsx' // Importa correctamente el componente
import LoginForm from './Login.jsx'

export function App () {
  return (
    <>
      <LoginForm />
      <ExpensiveFollowCard text='Holis' quantity='25' />
      <ExpensiveFollowCard text='Adios' quantity='30' />
      <DataComponent />
    </>
  )
}

export default App

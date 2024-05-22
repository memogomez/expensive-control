/* eslint-disable jsx-quotes */
import React, { useState } from 'react'

const LoginForm = () => {
  // Estado local para manejar los valores del formulario
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Manejadores de cambio para actualizar los valores del formulario
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  // Manejador para el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    // Aquí puedes enviar los datos del formulario a tu servidor para autenticación
    console.log('Username:', username)
    console.log('Password:', password)
    // También puedes realizar la validación del formulario aquí antes de enviar los datos al servidor
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Username:</label>
          <input
            className="mt-1 p-2 w-full border rounded-md"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password:</label>
          <input
            className="mt-1 p-2 w-full border rounded-md"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm

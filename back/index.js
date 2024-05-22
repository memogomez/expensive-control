const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'pruebareact'
})

db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err)
    return
  }
  console.log('Conectado a la base de datos MySQL')
})

// Ejemplo de endpoint para obtener datos
app.get('/api/datos', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      return res.status(500).send(err)
    }
    res.json(results)
  })
})
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})

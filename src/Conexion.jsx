import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataComponent () {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/datos')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div>
      <h1>Datos desde MySQL</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.id} {item.name} {item.password}</li>
        ))}
      </ul>
    </div>
  )
}

export default DataComponent

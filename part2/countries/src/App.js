import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, [])

  const handleFilterChange = event => {
    setFilter(event.target.value)
  }

  if (countries.length) {
    return (
      <div>
        <div>Find countries <input value={filter} onChange={handleFilterChange} /></div>
        <Country countries={countries} filter={filter} />
      </div>
    )
  }
  else {
    return <div>Loading...</div>
  }
}

export default App
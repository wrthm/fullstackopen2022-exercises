import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  const handleAddPerson = (event) => {
    event.preventDefault()
    if (newName === '') {
      return
    }
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook.`)
    }
    else {
      const newPerson = { name: newName, number: newNumber }
      axios
        .post('http://127.0.0.1:3001/persons', newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          setFilter('')
        })
    }
  }

  const handleFilterChange = (event) => setFilter(event.target.value)
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add new entry</h2>
        <PersonForm name={newName} handleNameChange={handleNameChange} number={newNumber} handleNumberChange={handleNumberChange} handleAddPerson={handleAddPerson} />
      <h2>Numbers</h2>
      <Persons data={persons} filter={filter} />
    </div>
  )
}

export default App
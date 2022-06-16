import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '00-12-4152151' },
    { name: 'Carlo Santos', number: '70-12-2342114' },
    { name: 'Jary Pense', number: '60-10-8645842' },
  ])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
      setFilter('')
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
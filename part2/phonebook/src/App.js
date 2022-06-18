import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PersonsList from './PersonsList'
import * as personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService.getAll().then(data => setPersons(data))
  }, [])

  const handleAddPerson = event => {
    event.preventDefault()
    if (newName === '') {
      return
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook.`)
    }
    else {
      const newPerson = { name: newName, number: newNumber }
      personService
        .create(newPerson)
        .then(data => {
          setPersons(persons.concat(data))
          setNewName('')
          setNewNumber('')
          setFilter('')
        })
    }
  }

  const handleDeletePerson = id => {
    const selectedPerson = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${selectedPerson.name}?`)) {
      personService
        .deleteId(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const handleFilterChange = event => setFilter(event.target.value)
  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add new entry</h2>
        <PersonForm name={newName} handleNameChange={handleNameChange} number={newNumber} handleNumberChange={handleNumberChange} handleAddPerson={handleAddPerson} />
      <h2>Numbers</h2>
      <PersonsList data={persons} filter={filter} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App
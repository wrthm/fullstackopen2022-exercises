import { useState, useEffect } from 'react'
import Filter from './Filter'
import Notification from './Notification'
import PersonForm from './PersonForm'
import PersonsList from './PersonsList'
import * as personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService.getAll().then(data => setPersons(data))
  }, [])

  const resetFormFields = () => {
    setNewName('')
    setNewNumber('')
    setFilter('')
  }

  const showNotification = (message, success = true) => {
    setNotification({ message, success })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const handleAddPerson = event => {
    event.preventDefault()
    if (newName === '') {
      return
    }

    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (existingPerson) {
      if (window.confirm(`${existingPerson.name} is already in phonebook, replace the old number with a new one?`)) {
        personService
          .update({ ...existingPerson, number: newNumber })
          .then(updatedEntry => {
            setPersons(persons.map(person => person.id === existingPerson.id ? updatedEntry : person))
            resetFormFields()
            showNotification(`Updated ${newName}`, true)
          })
      }
    }
    else {
      personService
        .create({ name: newName, number: newNumber })
        .then(data => {
          setPersons(persons.concat(data))
          resetFormFields()
          showNotification(`Added ${newName}`, true)
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
          showNotification(`Deleted ${selectedPerson.name}`, true)
        })
    }
  }

  const handleFilterChange = event => setFilter(event.target.value)
  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification data={notification} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add new entry</h2>
        <PersonForm name={newName} handleNameChange={handleNameChange} number={newNumber} handleNumberChange={handleNumberChange} handleAddPerson={handleAddPerson} />
      <h2>Numbers</h2>
      <PersonsList data={persons} filter={filter} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App
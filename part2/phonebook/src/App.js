import { useState } from 'react'

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

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={(event) => setFilter(event.target.value)} />
      </div>
      <h2>Add new entry</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter((person) => person.name.toLowerCase().startsWith(filter.toLowerCase())).map((person) => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App
import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phoneNumber: 360 - 653 - 2432,
      id: 1
    },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }

  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchResults, setSearchResults] = useState('')


  const handleSubmitPerson = (event) => {
    event.preventDefault()
    const duplicate = persons.find(person => person.name === newName)

    if (duplicate) {
      alert(`${newName} is already added to phonebook`)
    } else {
      addName()
    }
  }

  const addName = () => {
    const nameObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObj))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchResults(event.target.value)
  }

  const searchMatch = persons.filter(person => person.name.toLowerCase().includes(searchResults.toLowerCase()))

  const matchesToShow = searchMatch
    ? searchMatch
    : persons

  return (
    <div>
      <Filter
        type='text'
        valueSearch={searchResults}
        handleSearchChange={handleSearchChange}
      />
      <PersonForm
        handleSubmitPerson={handleSubmitPerson}
        valueName={newName}
        handleNameChange={handleNameChange}
        valueNumber={newNumber}
        handleNumberChange={handleNumberChange}
        type='submit' />

      <Persons searchMatch={matchesToShow} />
    </div>
  )
}

export default App;
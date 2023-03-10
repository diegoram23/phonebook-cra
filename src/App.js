import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'
import Footer from './components/Footer'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchResults, setSearchResults] = useState('')
  const [succesfulMessage, setSuccesfulMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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
      number: newNumber
    }
    personService
      .create(nameObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setSuccesfulMessage(`Added ${returnedPerson.name} to Contacts`)
        setTimeout(() => {
          setSuccesfulMessage(null)
        }, 2000)
        setNewName('')
        setNewNumber('')
      })
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
  const matchAvailable = searchMatch
  ? searchMatch : persons


  const handleDelete = (id, name) => {
    personService
      .deletePerson(id)
      .then(() => {
        window.confirm(`Are you sure you want to delete ${name}`)
        personService
          .getAll()
          .then(initialPersons => {
            setPersons(initialPersons)
          })
      })
      .catch(error => {
        setErrorMessage(`${name} has already been removed from server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 2000)
      })
  }

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

      <Notification
        successMessage={succesfulMessage}
        errMessage={errorMessage}
      />

      <Persons
        searchMatch={matchAvailable}
        handleDelete={handleDelete}
      />

      <Footer />
    </div>
  )
}

export default App;
import { useState, useEffect } from 'react'
import Person from './components/Person'
import SearchFilter from './components/SearchFilter'
import AddANew from './components/AddANew'
import phonebookService from './services/phonebook'




const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterField, setFilterField] = useState('')

  useEffect(() => {
    console.log("effect")
    phonebookService.getAll()
      .then(initialPersons => {
        console.log("promise fulfilled")
        setPersons(initialPersons)
      })
  }, [])

  const handleNameInput = (event) => {
    setNewName(event.target.value)

  }
  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)

  }
  const handleFilterField = (event) => {
    setFilterField(event.target.value)

  }

  const handleDeletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      phonebookService.destroy(person.id)
        .then(
          setPersons(persons.filter(p => p.id !== id))
        )

    }
  }

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (persons.find(person =>
      person.name.toUpperCase() === newName.toLocaleUpperCase())) {
      // console.log('newName', newName)
      // console.log("inside found")
      alert(`${newName} is already added to phonebook`)

    } else {
      phonebookService.create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const personsToShow = (filterField === '')
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(filterField.toUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filterField={filterField} handleFilterField={handleFilterField} />
      <p />
      <AddANew addName={addName}
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput} />
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.id}
            name={person.name}
            number={person.number}
            deletePerson={() => handleDeletePerson(person.id)}
          />)}
      </ul>
    </div>
  )
}

export default App
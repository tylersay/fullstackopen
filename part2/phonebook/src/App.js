import { useState, useEffect } from 'react'
import Person from './components/Person'
import SearchFilter from './components/SearchFilter'
import AddANew from './components/AddANew'
import axios from 'axios'




const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterField, setFilterField] = useState('')

  useEffect(() => {
    console.log("effect")
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      console.log("promise fulfilled")
      setPersons(response.data)
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

  const addName = (event) => {
    event.preventDefault()
    const toAdd = {
      name: newName,
      number: newNumber
    }

    if (persons.find(person =>
      person.name === newName)) {
      // console.log('newName', newName)
      // console.log("inside found")
      alert(`${newName} is already added to phonebook`)

    } else {
      setPersons(persons.concat(toAdd))
      setNewName('')
      setNewNumber('')
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
          <Person key={person.name}
            name={person.name}
            number={person.number} />)}
      </ul>
    </div>
  )
}

export default App
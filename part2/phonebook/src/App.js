import { useState } from 'react'
import Person from './components/Person'
import SearchFilter from './components/SearchFilter'
import AddANew from './components/AddANew'





const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterField, setFilterField] = useState('')


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
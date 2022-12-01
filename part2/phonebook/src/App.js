import { useState } from 'react'

const Person = (props) => {
  return (
    <li>
      {props.name} {props.number}
    </ li >)
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "123-4567-123" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameInput = (event) => {
    setNewName(event.target.value)

  }
  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
            onChange={handleNameInput} />
        </div>

        <div>
          number: <input value={newNumber}
            onChange={handleNumberInput} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
        {/* <div>debug: {newName}</div> */}
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.name}
            name={person.name}
            number={person.number} />)}
      </ul>
    </div>
  )
}

export default App
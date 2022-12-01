import { useState } from 'react'

const Person = (props) => {
  return (
    <li>
      {props.name}
    </ li >)
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameInput = (event) => {
    setNewName(event.target.value)

  }

  const addName = (event) => {
    event.preventDefault()
    const toAdd = {
      name: newName
    }
    setPersons(persons.concat(toAdd))
    setNewName('')
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
          <button type="submit">add</button>
        </div>
        {/* <div>debug: {newName}</div> */}
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person name={person.name} key={person.name} />)}
      </ul>
    </div>
  )
}

export default App
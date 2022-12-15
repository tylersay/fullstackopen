const { response } = require('express')
const express = require('express')
const app = express()
app.use(express.json())

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// const getMax = () => {
//     const 
// }

app.get('/info', (request, response) => {
    response.send(`
    <h1>Hello World</h1>
    Phonebook has info for ${persons.length} persons.
    <p/>${Date()}
    `)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => {
        // console.log("persons", persons, 'person.id', p.id, typeof (p.id),
        //     "id", id, typeof (id))
        return (p.id === id)
    })
    if (person) {
        console.log('person', person)
        response.json(person)
    } else {
        response.status(404).end()
    }
})
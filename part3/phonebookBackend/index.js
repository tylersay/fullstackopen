const { response, request } = require('express')
const express = require('express')
const { token } = require('morgan')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.json())



app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
// app.use(morgan(
//     ':method :url :status :res[content-length] - :response-time ms :body'
// ))

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
        // console.log('person', person)
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)

    response.status(204).end()
})

const newId = () => {
    return Math.round(Math.random() * 100_000_000)
}

app.post('/api/persons', (request, response) => {
    const body = request.body


    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'content missing'
        })
    }
    const oldPerson = persons.find(p =>
        p.name.toUpperCase() === body.name.toUpperCase())
    console.log('oldPerson', oldPerson)

    if (oldPerson) {
        return response.status(400).json({
            error: "name must be unique"
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: newId(),
    }

    persons = persons.concat(person)
    response.json(person)
    
    
})

morgan.token('body', request => {
    // const body = JSON.stringify(request.body.name)
    return (JSON.stringify(request.body))
})
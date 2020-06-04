const express = require('express')

const app = express()
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')


const Person = require('./models/person')


app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.use(
  morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]')
)


//  Find individual person  //

app.get('/api/persons/:id', (request, response, next) => {
  const { id } = request.params

  Person.findById(id)
    .then((person) => {
      if (person) {
        response.json(person.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})


// Send a HTTP DELETE request to delete a specific Phonebook entry and remove from MongoDB //

app.delete('/api/persons/:id', (request, response, next) => {
  const { id } = request.params

  Person.findByIdAndRemove(id)
    .then((result) => {
      if (result) {
        response.json(result.toJSON())
      } else {
        response.status(204).end()
      }
    })
    .catch((error) => next(error))
})

// Send GET request to display the amount of Phonebook entires, //
// as well as the current date and time (localized) //

app.get('/api/info', (request, response) => {
  Person.countDocuments({}).then((totalPersons) => {
    response.json(
      `Phonebook has info for ${totalPersons} people  ${Date()}`
    )
  })
})


// GET all persons on the page via HTTP GET request //

app.get('/api/persons', (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons)
  })
})


// Allow user to modify phonebok entry number, if the name is a duplicate //

app.put('/api/persons/:id', (request, response, next) => {
  const { id } = request.params

  const person = {
    name: request.body.name,
    number: request.body.number,
  }
  const opts = { runValidators: true }

  Person.findByIdAndUpdate(id, person, opts, { new: true })
    .then((updatedPerson) => {
      if (updatedPerson) {
        response.json(updatedPerson.toJSON())
      } else {
        response.status(204).end()
      }
    })
    .catch((error) => next(error))
})

// Add new Phonebook entries //

app.post('/api/persons', (request, response, next) => {
  const person = new Person({
    name: request.body.name,
    number: request.body.number,
  })

  person
    .save()
    .then((savedPerson) => {
      response.json(savedPerson.toJSON())
    })
    .catch((err) => next(err))
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } if (error.name === 'ValidationError') {
    return response.status(400).send(error.message)
  }

  next(error)
}

app.use(errorHandler)

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

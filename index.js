const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))


/// middle-ware ///

/// Token to grab the body content of a POST HTML request ///
morgan.token("body", function (req, res) {
  return JSON.stringify(req.body);
})

app.use(
  morgan(
    ":method :url :status :response-time ms - :res[content-length] :body - :req[content-length]"
  )
)


let persons = [
  { 
  name: "Arto Hellas", 
  number: "040-123456",
  id: 1
},
{ 
   name: "Ada Lovelace", 
   number: "39-44-5323523",
   id: 4
},
{ 
   name: "Dan Abramov", 
   number: "12-43-234345",
   id: 3
},
{ 
    name: "Mary Poppendieck", 
    number: "39-23-6423122" ,
    id: 2
}
]

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
        res.json(person)
    } else {
        res.status(400).end()
    }
})


/// Send a HTTP DELETE request to delete a specific Phonebook entry ///

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)

    /// filter out the deleted person from our Phonebook backend databasee ///
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

/// Send GET request to display the amount of Phonebook entires as well as the current date and time (localized) ///

app.get('/api/info', (req, res) => {
    const totalPersons = persons.length
    res.send(
        `Phonebook has info for ${totalPersons} people
        <br>
        <br> 
        ${Date()}`)
})

/// Generate an new ID for newly added persons that does not duplicate an already existing ID //

const generateId = () => {
  const newId = persons.length > 4 
  ? Math.floor(Math.random() * (1000 - 5) + 5)
  : 0
  return newId
}

/// Add new Phonebook entries to the backed via HTTP POST request ///

app.post('/api/persons', (request, response) => {
    const body = request.body
    const duplicate = persons.find(person => person.name.toLowerCase().includes(body.name.toLowerCase()))
    

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }

     if (duplicate) {
       return response.status(400).json({
         error: "name must be unique"
       });
     }

     
    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    /// after new person is created, add them to the 'persons' array via 'concat': //
  
    persons = persons.concat(person)
    

    response.json(person)

})


/// Display all the JSON data on the page via HTTP GET request ///
app.get('/api/persons', (request, response) => {
  response.json(persons)
})

/// middle-ware ///
app.use(morgan("tiny"));


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
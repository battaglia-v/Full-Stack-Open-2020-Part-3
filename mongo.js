const mongoose = require('mongoose')

const password = process.argv[2]
const personName = process.argv[3]
const personNumber = process.argv[4]


const url = `mongodb+srv://fullstack:${password}@cluster0-ilqup.mongodb.net/phonebook-backend?retryWrites=true&w=majority`


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })



const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {

    console.log(`phonebook:`)
    return (
        
        Person
            .find({})
            .then(persons => {
                persons.forEach(person => {
                    console.log(`${person.name} ${person.number}`)
                    mongoose.connection.close()
                })
            }
            ))

}

else if (process.argv.length === 5) {

const person = new Person({
    name: personName,
    number: personNumber,

    })




    person.save().then(result => {
        console.log(`added ${person.name} number ${person.number} to the phonebook`)
        mongoose.connection.close()
    })
}
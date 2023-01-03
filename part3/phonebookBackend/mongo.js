const mongoose = require('mongoose')

const password = process.argv[2]
const url = `mongodb+srv://tyler111:${password}@cluster0.pftvtfp.mongodb.net/phonebook?retryWrites=true&w=majority`

const entrySchema = new mongoose.Schema({
    name: String,
    number: String,
})
const Entry = mongoose.model('Entry', entrySchema)


if (process.argv.length !== 3 && process.argv.length !== 5) {
    console.log('Invalid number of arguements', process.argv.length)
    process.exit(1)
}

if (process.argv.length == 5) {
    const newName = process.argv[3]
    const newNumber = process.argv[4]

    mongoose.connect(url)
        .then(result => {
            console.log("connected")
            const entry = new Entry({
                name: newName,
                number: newNumber
            })
            return entry.save()
        })
        .then(() => {
            console.log(`added ${newName} number ${newNumber} to phonebook`)
            return mongoose.connection.close()
        })
        .catch(err => console.log(err))
}

if (process.argv.length == 3) {
    mongoose
        .connect(url)
    Entry.find({}).then(result => {
        console.log(`phonebook`)
        result.forEach(entry => {
            console.log(`${entry.name} ${entry.number}`)
            mongoose.connection.close()
        })
    })
}


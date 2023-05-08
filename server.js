const express = require('express')

const app = express()
const port = 3000
let count = 99

//next is a method in middleware that lets server know what the next step is after middleware func

app.get('/', (req, res) => {
    res.send(`<h1>${count} bottles of beer on the wall </h1> <a href='/:numOfBottles'>take one down, pass it around</a>`)
})

app.get('/:numOfBottles', (req, res) => {
    if (count < 1) {
        res.send(`<h1>No more beer, <a>Start Over</a></h1>`)
    }
    count--
    req.params.numOfBottles = count
    res.send(`<h1>${req.params.numOfBottles} bottles of beer on the wall </h1> <a href='/:numOfBottles'>take one down, pass it around</a>`)
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
import express from "express"

const app = express()
const port = 4001

const categories = ['Food', 'Coding', 'Work', 'Other']

app.get('/', (request, response) => response.send({ info: 'Journal API'}))

app.get('/categories', (req, res) => res.status(204).send(categories))

app.listen(port, () => console.log(`App running at http://localhost:${port}`))
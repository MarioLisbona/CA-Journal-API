import express from 'express'
import { CategoryModel } from './db.js'
import entryRoutes from './routes/entry_routes.js'
import categoryRoutes from './routes/category_routes.js'
import cors from 'cors'

// Comment here to test deployment

const app = express()

app.use(cors())

app.use(express.json()) //parsing json body if there is one that comes in with the request

app.get('/', (request, response) => response.send({ info: 'Journal API 2023' }))

app.use('/entries', entryRoutes)
app.use('/categories', categoryRoutes)

export default app
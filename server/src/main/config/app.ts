import express from 'express'

import { apiRoutes } from './routes'

const app = express()

app.use(express.json())

apiRoutes(app)

export { app }

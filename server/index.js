import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())

import handlerFunctions from './controller.js'

app.get('/', handlerFunctions.get)
app.post('/', handlerFunctions.add)
app.delete('/', handlerFunctions.delete)
app.post('/', handlerFunctions.save)

ViteExpress.listen(app, 8488, () => console.log('http://localhost:8488'))
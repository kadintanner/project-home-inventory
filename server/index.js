import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'
import cors from 'cors'
import session from 'express-session'

const app = express()
const PORT = 7488

app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: 'some random string',
    })
  )
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
// app.use(express.static('public'))
app.use(express.json())
app.use(cors())

import handlerFunctions from './controller.js'

// LOGIN & REGISTER
app.get('/login', handlerFunctions.login)
app.post('/register', handlerFunctions.register)

// ITEM TABLE
app.get('/items', handlerFunctions.items)
app.get('/getItem', handlerFunctions.getItem)
app.post('/addItem', handlerFunctions.addItem)
app.put('/editItem/:id', handlerFunctions.editItem)
app.delete('/deleteItem/:id', handlerFunctions.deleteItem)

// app.post('/newItem', handlerFunctions.newItem)

// CATEGORY TABS
// TO DO

ViteExpress.listen(app, 7488, () => console.log('http://localhost:7488'))
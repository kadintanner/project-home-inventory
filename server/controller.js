import { User, Item, Category } from './database/model.js'

let TEST_DATA = [
    { id: 0, name: 'test data 1', description: 'test description', cost: 50, date: null, location: 'United States', Category: 'Sports' },
    { id: 1, name: 'test data 2', description: 'test description', cost: 11, date: null, location: 'United States', Category: 'Sports' },
    { id: 2, name: 'test data 3', description: 'test description', cost: 235, date: null, location: 'United States', Category: 'Sports' }
]

let globalId = 3

const handlerFunctions = {

    // LOGIN & REGISTER FUNCTIONS

    register: async (req, res) => {
        const { username, password } = req.body
        console.log(username, password)
        const alreadyExists = await User.findAll({
            where: {
                username
            }
        })
        if (alreadyExists[0]) {
            res.status(200).send('Username already exists')
        } else {

            const newUser = await User.create({
                username: username,
                password: password
            })

            req.session.user = newUser

            res.send({
                message: 'account created',
                user_id: newUser.user_id
            })
        }
    },

    login: (req, res) => {},

    // ITEM TABLE FUNCTIONS


    items: (req, res) => {
        res.send(TEST_DATA)
    },

    getItem: (req, res) => {
        const items = Item.findAll()
    },


    addItem: async (req, res) => {
        const description = req.body.description

        const newObj = {
            id: globalId,
            description: description,
            rate: 0,
            hours: 0
        }

        TEST_DATA.push(newObj)
        globalId++
        res.send(newObj)

    
    },

    deleteItem: (req, res) => {
        const id = req.params.id
        TEST_DATA = TEST_DATA.filter((item) => item.id !== +id)
        res.send(TEST_DATA)
    },

    editItem: (req, res) => {
        const { id } = req.params
        const { name, description, cost, date, location } = req.body

        const index = TEST_DATA.findIndex(item => item.id == id)
        const tableItem = TEST_DATA[index]

        tableItem.name = name
        tableItem.description = description
        tableItem.cost = cost
        tableItem.date = date
        tableItem.location = location

        res.send(tableItem)
    },



    // CATEGORY TAB FUNCTIONS

    // TO DO

}

export default handlerFunctions
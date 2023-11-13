import { User, Item, Category } from './database/model.js'

let TEST_DATA = [
    { id: 0, name: 'test data 1', description: 'test description', cost: 11, date: 11.9, location: 'United States' },
    { id: 1, name: 'test data 4', description: 'test description', cost: 11, date: 11.9, location: 'United States' },
    { id: 2, name: 'test data 3', description: 'test description', cost: 11, date: 11.9, location: 'United States' }
]

let globalId = 2

const handlerFunctions = {

    items: (req, res) => {
        res.send(TEST_DATA)
    },

    getItem: (req, res) => {
        const items = Item.findAll()
    },

    register: async (req, res) => {
        const { username, password } = req.body

        const alreadyExists = await User.findAll({
            where: {
                username
            }
        })
        if (alreadyExists[0]) {
            res.status(400).send('Username already exists')
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

    login: (req, res) => {

    },

    addItem: (req, res) => {
        const description = req.body.description
        // const { rate, hours } = req.body

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

}

export default handlerFunctions
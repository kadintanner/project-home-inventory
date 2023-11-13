import { User, Item, Category } from './database/model.js'

let TEST_DATA = [
    { id: 0, name: 'test data 1', description: 'test description', cost: 11, date: 11/9/23, location: 'United States' },
    { id: 1, name: 'test data 4', description: 'test description', cost: 11, date: 11/9/23, location: 'United States' },
    { id: 2, name: 'test data 3', description: 'test description', cost: 11, date: 11/9/23, location: 'United States' }
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

    login: (req, res) => {}

}

export default handlerFunctions
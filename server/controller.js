import { User, Item, Category } from './database/model.js'

let TEST_DATA = {}

let globalId = 2

const handlerFunctions = {

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
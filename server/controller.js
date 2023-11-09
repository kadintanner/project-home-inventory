import { User, Item, Category } from './database/model.js'

let TEST_DATA = {}

let globalId = 2

const handlerFunctions = {

    getItem: (req, res) => {
        const items = Item.findAll()
    },

    register: async (req, res) => {
        const username = req.body.username
        const password = req.body.password
        console.log(username)

        const newUser = await User.create({
            username: username,
            password: password
        })

        req.session.user = newUser
    },

    login: (req, res) => {
        const username = req.body.username
        const password = req.body.password
        db.query('SELECT * FROM users WHERE username = ? AND password = ?',
            [username, password],
            (err, result) => {
                if (err) {
                    res.send({ err: err })
                }
                if (result.length > 0) {
                    res.send(result)
                } else {
                    res.send({ message: 'Invalid Entry' })
                }
            }
        )
    }

}

export default handlerFunctions
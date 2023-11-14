import { Item, Category, User, db } from './model.js';

console.log('Syncing database...');
await db.sync({ force: true });
console.log('Seeding database...');

let userTestData = [
    {
        username: 'test_username',
        password: 'test_password'
    }
]

const usersInDB = await Promise.all(
    userTestData.map(async (user) => {
        const newUser = await User.create({
            username: user.username,
            password: user.password
        })

        return newUser;
    })
)

let itemTestData = [
    {
        name: 'Test Name',
        description: 'Test description goes here.',
        cost: 0,
        date_aquired: 11 / 0o7 / 2023,
        location_aquired: 'Test Location'
    }
]

const itemsInDB = await Promise.all(
    itemTestData.map(async (item) => {
        const newItem = await Item.create({
            name: item.name,
            description: item.description,
            cost: item.cost,
            date_aquired: item.date_aquired,
            location_aquired: item.location_aquired
        })

        return newItem;
    })
)

let categoryTestData = [
    {
        name: 'Test_Category'
    }
]

const categoryInDB = await Promise.all(
    categoryTestData.map(async (category) => {
        const newCategory = await Category.create({
            name: category.name
        })

        return newCategory
    })
)


await db.close();
console.log('Finished seeding database')
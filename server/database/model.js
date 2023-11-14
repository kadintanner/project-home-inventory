import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

export const db = await connectToDB('postgresql:///inventory');

export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'User',
        sequelize: db,
        timestamps: false
    },
);


export class Item extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Item.init(
    {
        Item_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        cost: {
            type: DataTypes.INTEGER
        },
        date_aquired: {
            type: DataTypes.DATE
        },
        location_aquired: {
            type: DataTypes.STRING
        },
    },
    {
        modelName: 'Item',
        sequelize: db,
        timestamps: true,
        updatedAt: false
    }
);

export class Category extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Category.init(
    {
        category_Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    },
    {
        modelName: 'Category',
        sequelize: db
    }
);

User.hasMany(Item, { foreignKey: 'User_Id' });
Item.belongsTo(User, { foreignKey: 'User_Id' });

Category.hasMany(Item, { foreignKey: 'Category_Id' });
Item.belongsTo(Category, { foreignKey: 'Category_Id' });
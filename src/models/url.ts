import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize();

export default class Url extends Model {}

Url.init({
    shortUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Url',
    timestamps: true
})
import {DataTypes, Model, Optional} from "sequelize";
import sequelizeConnection from '../config';

interface UrlAttributes {
    id: number;
    shortUrl: string;
    longUrl: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UrlInput extends Optional<UrlAttributes, 'id' | 'shortUrl'> {}
export interface UrlOutput extends Required<UrlAttributes> {}

class Url extends Model<UrlAttributes, UrlInput> implements UrlAttributes{
    public id!: number;
    public shortUrl!: string;
    public longUrl!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Url.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true },
    shortUrl: { type: DataTypes.STRING, allowNull: false },
    longUrl: { type: DataTypes.STRING, allowNull: false },
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default Url;
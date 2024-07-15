import { Sequelize } from 'sequelize';
import {Dialect} from "sequelize";


export const port = Number(process.env.API_PORT);
export const db_host = String(process.env.DATABASE_HOST);
export const db_port = Number(process.env.DATABASE_PORT);
export const db_name = String(process.env.DATABASE_NAME);
export const db_user = String(process.env.DATABASE_USER);
export const db_password = String(process.env.DATABASE_PASSWORD);
export const db_driver: Dialect = process.env.DATABASE_DRIVER as Dialect

export default new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  dialect: db_driver
})
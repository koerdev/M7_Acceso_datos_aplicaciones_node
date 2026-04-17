import { Sequelize } from "sequelize";
import 'dotenv/config'

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DIALECT } = process.env

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DIALECT,
  logging: false
})

export default sequelize;
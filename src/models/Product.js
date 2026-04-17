import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true //createAt updateAt
})

export default Product
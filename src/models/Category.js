import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Category = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false
  }
})

export default Category
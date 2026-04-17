import Category from "./Category.js";
import Product from "./Product.js";

// Una categoria tiene muchos productos
Category.hasMany(Product, { foreignKey: "categoryId" })

// Un procuto pertenece a una sola categoria
Product.belongsTo(Category, { foreignKey: "categoryId" })

export { Product, Category }
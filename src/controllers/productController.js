import { Product, Category } from "../models/index.js"

const home = async (req, res) => {
  try {
    const products = await Product.findAll({ raw: true });

    res.render('home', {
      pageTitle: 'Inicio',
      products,
    })
  } catch (error) {
    console.log(error)
  }
}

const getCreateCategoryForm = async (req, res) => {
  try {
    res.render('formCategory', {
      pageTitle: 'Crear Categoría',
    })
  } catch (error) {
    console.log(error)
    res.status(500).send("Error interno");
  }
}

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const categoria = await Category.create({ name });

    res.redirect("/create-product");
  } catch (error) {
    console.log(error)
    res.status(500).send("Error interno");
  }
}

const getCreateProductForm = async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true });
    res.render('formProduct', {
      pageTitle: 'Agregar Producto',
      categories,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send("Error interno");
  }
}

const createProduct = async (req, res) => {
  try {
    const { title, description, price, categoryId } = req.body;
    const product = await Product.create({
      title,
      description,
      price,
      categoryId,
    });

    res.redirect("/");
  } catch (error) {
    console.log(error)
    res.status(500).send("Error interno");
  }
}

export { home, getCreateCategoryForm, createCategory, getCreateProductForm, createProduct }
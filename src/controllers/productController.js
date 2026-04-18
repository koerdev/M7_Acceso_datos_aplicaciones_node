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
    res.status(500).send("Error al obtener las categorías");
  }
}

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const categoria = await Category.create({ name });

    res.redirect("/create-product");
  } catch (error) {
    console.log(error)
    res.status(500).send("Error al crear categoría");
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
    res.status(500).send("Error al obtener los productos");
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
    res.status(500).send("Error al agregar producto");
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    await Product.destroy({ where: { id } });

    res.redirect("/");
  } catch (error) {
    console.log(error)
    res.status(500).send("Error al borrar producto");
  }
}

export {
  home,
  getCreateCategoryForm,
  createCategory,
  getCreateProductForm,
  createProduct,
  deleteProduct
}
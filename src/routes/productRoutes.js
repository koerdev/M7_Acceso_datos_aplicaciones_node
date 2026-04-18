import express from 'express'
import {
  home,
  getCreateCategoryForm,
  createCategory,
  getCreateProductForm,
  createProduct,
  deleteProduct,
  getEditProductForm,
  updateProduct,
} from '../controllers/productController.js'

const router = express.Router()

router.get('/', home)

router.get('/create-category', getCreateCategoryForm)
router.post('/create-category', createCategory)

router.get('/create-product', getCreateProductForm)
router.post('/create-product', createProduct)

router.post('/delete/:id', deleteProduct)

router.get('/edit/:id', getEditProductForm)
router.post('/update/:id', updateProduct)

export default router
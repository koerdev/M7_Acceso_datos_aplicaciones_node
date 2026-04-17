import express from 'express'
import { home, getCreateCategoryForm, createCategory, getCreateProductForm, createProduct } from '../controllers/productController.js'

const router = express.Router()

router.get('/', home)

router.get('/create-category', getCreateCategoryForm)
router.post('/create-category', createCategory)

router.get('/create-product', getCreateProductForm)
router.post('/create-product', createProduct)

export default router
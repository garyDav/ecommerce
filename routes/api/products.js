const express = require('express')
const router = express.Router()
const productMocks = require('../../utils/mocks/products')
const ProductsService = require('../../services/products')

const productService = new ProductsService();

router.get('/', async (req, res, next) => {
  const { tags } = req.query

  try {
    const products = await productService.getProducts({ tags })
  
    res.status(200).json({
      data: products,
      message: 'products listed'
    })
  } catch(err) {
    next(err)
  }
})

router.get('/:productId', async (req, res, next) => {
  const { productId } = req.params

  try {
    const product = await productService.getProduct({ productId })
  
    res.status(200).json({
      data: product,
      message: 'product retrieved'
    })
  } catch(err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const { body: product } = req
  
  try {
    const productCreated = await productService.createProduct({ product })
  
    res.status(201).json({
      data: productCreated,
      message: 'product created'
    })
  } catch(err) {
    next(err)
  }
})

router.put('/:productId', async (req, res, next) => {
  const { productId } = req.params
  const { body: product } = req
  
  try {
    const productUpdated = await productService.updateProduct({ productId, product })
  
    res.status(200).json({
      data: productUpdated,
      message: 'product updated'
    })
  } catch(err) {
    next(err)
  }
})

router.delete('/:productId', async (req, res, next) => {
  const { productId } = req.params
  
  try {
    const productDeleted = await productService.deleteProduct({ productId })
  
    res.status(200).json({
      data: productDeleted,
      message: 'product deleted'
    })
  } catch(err) {
    next(err)
  }
})

module.exports = router

import express from 'express';
import { addProduct, fetchProducts, updateProducts, deleteProducts, fetchProduct } from '../controllers.js/menu.js';

const router = express.Router();

router.post('/addproduct', addProduct);
router.get('/menugrid', fetchProducts);
router.patch('/editproduct/:id', updateProducts);
router.delete('/deleteproduct/:id', deleteProducts);
router.get('/productdetail/:id', fetchProduct)

export default router;
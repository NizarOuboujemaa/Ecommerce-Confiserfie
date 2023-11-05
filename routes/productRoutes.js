import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from "../controllers/productController.js";
import formidable from 'express-formidable';
import braintree from "braintree";

const router = express.Router();

// routes 
router.post('/create-product', requireSignIn, isAdmin,formidable(), createProductController);

router.put('/update-product/:pid', requireSignIn, isAdmin,formidable(), updateProductController);
// get products 
router.get('/get-product',getProductController);
// single product
router.get('/get-product/:slug',getSingleProductController);
// get photo 
router.get('/product-photo/:pid', productPhotoController);
// delete product 
router.delete('/delete-product/:pid', deleteProductController);

// filetr product 
router.post('/product-filters', productFiltersController)

// product count 
router.get('/product-count', productCountController);

// product per page 
router.get("/product-list/:page", productListController);

// Search Product
router.get('/search/:keyword', searchProductController);
// Produits similaires
router.get('/related-product/:pid/:cid', relatedProductController);

router.get('/product-category/:slug', productCategoryController)

// Payement 
router.get('/braintree/token', braintreeTokenController);
// Payment
router.get('/braintree/payment', requireSignIn,brainTreePaymentController);

export default router;
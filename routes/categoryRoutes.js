import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { categoryControlller, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";


const router = express.Router();

// routes 
//create
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);
//update
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);
// getAllCategory
router.get('/get-category',categoryControlller)
//
router.get('/single-category/:slug', singleCategoryController)
// delete
router.delete('/delete-category/:id',requireSignIn, isAdmin,deleteCategoryController )

export default router;  
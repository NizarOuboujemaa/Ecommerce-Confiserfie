import express from 'express';
import {registerController, loginController,testController, forgotPasswordController, updateProfileController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';


// objet router
const router =express.Router();

//routing 
// Post de register methode
router.post("/register", registerController);

// Post de Login 
router.post("/login",loginController);

// Forget Password Post 
router.post('/forgot-password', forgotPasswordController);

// test routing
router.get('/test', requireSignIn, isAdmin, testController);

//auth routes protege user
router.get("/user-auth", requireSignIn, (req,res) => {
    res.status(200).send({ok : true});
}); 

//auth routes protege Admin
router.get("/admin-auth", requireSignIn, isAdmin, (req,res) => {
    res.status(200).send({ok : true});
}); 

// update Profile 
router.put('/profile',requireSignIn,updateProfileController)

export default router ;   
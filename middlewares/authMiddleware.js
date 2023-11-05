import JWT  from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req,res,next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_Token);
        req.user= decode;
        next();
    } catch (error) {
        console.log(error);
    }
};

// Admin        
export const isAdmin = async (req,res,next) =>{
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).send({ 
                success : false, 
                message: 'acces non autorise',
            });
        }else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message : 'erreur admin middleware'
        });
    }
}
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken'   // token authetification

export const registerController = async(req,res) => {
    try {
        const{name, email, password, phone, address, answer} = req.body;

        if(!name){
            return res.send({error:'Nom est obligatoire'});
        }
        if(!email){
            return res.send({message:'email est obligatoire'});
        }
        if(!password){
            return res.send({message:'password est obligatoire'});
        }
        if(!phone){
            return res.send({message:'telephone est obligatoire'});
        }
        if(!address){
            return res.send({message:'address est obligatoire'});
        } 
        if(!answer){
            return res.send({message:'answer est obligatoire'});
        }


        //utilisateur existant 

        const existingUser = await userModel.findOne({email});
        if(existingUser) {
            return res.status(200).send({
                success:false,
                message:'Utilisateur déja existant, Please login',
            });
        }
        
        //register user 

        const hashedPassword = await hashPassword(password);

        //save

        const user = new userModel({name,email,phone,address,password:hashedPassword, answer}).save();


        res.status(201).send({
            success : true,
            message:'Utilisateur enregistré avec succès', 
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message : 'erreur authentification',
            error,
        });
    }
};

// LOgin Post   
export const loginController = async(req,res) => {
    try {
        const{email,password} = req.body; 
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'email ou mot de passe non valide(s)',
            });
        }
        // Verification utilisateur
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:'email non existant',
            });
        }
        const match = await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message: 'mot de passe invalide',
        });
    }

    // JWT Token 
    const token = await JWT.sign({_id:user._id}, process.env.JWT_Token, {expiresIn : '7d',});
    res.status(200).send({
        success:true,
        message: 'connexion réussie',
        user:{
            _id: user._id, 
            name : user.name,
            email: user.email,
            phone : user.phone,
            address : user.address,
            role : user.role,
        },
        token, 
});
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Erreur login',
            error,
        });
        
    }
};

// forgotPasswordController
export const forgotPasswordController = async(req, res) => {
    try {
        const {email, answer, newPassword} = req.body;
        if(!email){
            res.status(400).send({message : 'Email required'});
        }
        if(!answer){
            res.status(400).send({message : 'answer required'});
        }
        if(!newPassword){
            res.status(400).send({message : 'A new Password is required'});
        }

        // check 
        const user = await userModel.findOne({email, answer});
        //validation 
        if(!user){
            return res.status(404).send({
                success : false, 
                message : 'Wrong Email or answer', 

            });
        }
        const hashed= await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, {password : hashed});
        res.status(200).send({
            success : true, 
            message : 'Password Reset Successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false, 
            message : "something went wrong",
            error,
        });
    }
};

//testController
export const testController = (req, res) => {
    try {
        res.send('Route protege');
    } catch (error) {
        console.log(error);
        res.send({error});
    }
};

export const updateProfileController = async (req, res) => {
    try {
      const { name, email, password, address, phone } = req.body;
      const user = await userModel.findById(req.user._id);
      //password
      if (password && password.length < 6) {
        return res.json({ error: "Passsword is required and 6 character long" });
      }
      const hashedPassword = password ? await hashPassword(password) : undefined;
      const updatedUser = await userModel.findByIdAndUpdate(
        req.user._id,
        {
          name: name || user.name,
          password: hashedPassword || user.password,
          phone: phone || user.phone,
          address: address || user.address,
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Profile Updated SUccessfully",
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error WHile Update profile",
        error,
      });
    }
  };

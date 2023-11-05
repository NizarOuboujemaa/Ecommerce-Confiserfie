import express from 'express' // Importation de Express
import colors from 'colors'; // Importation du module colors pour la console
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';


dotenv.config();

connectDB(); 
const app = express(); // Instance express pour configurer les routes et les réponses aux requêtes HTTPS

app.use(cors()); 
app.use(express.json());
app.use(morgan('dev')); 

//routes 
app.use('/api/v1/auth', authRoutes); 
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes); 


// api rest
app.get('/',(req,res) =>{
    res.send("<h1>Welcome To Ecommerce APP </h1>");

}); // définit une route HTTPS GET

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
}); // démarrer le serveur Express 



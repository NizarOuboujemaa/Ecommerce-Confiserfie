import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL );
        console.log(
            `Connexion réussie à la base de donnée MongoDB ${conn.connection.host}`.bgMagenta.white
            );
        
    } catch (error) {
        console.log('Erreur dans MongoDB ${erreur}'.bgRed.white)
    }
};

export default connectDB;
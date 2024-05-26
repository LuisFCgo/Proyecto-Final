import mongoose from 'mongoose';

export const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://localhost/regappdb');
        console.log('>>> DB Conected')
    } catch (error) {
        console.log(error);
    }
}
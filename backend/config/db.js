import mongoose from 'mongoose';

export const connectDB = async () => {
     await mongoose
     .connect('mongodb+srv://theamantaneja:amanbaba@cluster0.azrznwj.mongodb.net/CravingsNation')
     .then(()=>console.log("Database connected"));
}
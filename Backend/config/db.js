import mongoose from "mongoose";

export const connectDB = async() =>{
   await mongoose.connect('mongodb+srv://greatstack:greatstack@cluster0.sch7m.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}


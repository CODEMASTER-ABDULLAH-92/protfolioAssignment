import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://abdullahpeerzada92:ckt3eM5lrSPXf7Xh@cluster0.8bkzf.mongodb.net/Post-App");
        console.log("DB Connected:");
    } catch (error) {
        console.error("Data Base Error",error);
    }
}
export default connectDb;
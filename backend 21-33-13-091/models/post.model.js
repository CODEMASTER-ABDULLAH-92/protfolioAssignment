import mongoose from "mongoose";

// Define the Post schema
const PostSchema = new mongoose.Schema({
  topBtnText: { type: String,required:true},
  heading: { type: String,required:true},
  authername: { type: String,required:true},
  timestamp: { type: String,required:true},
  samllClock: { type: String,required:true},
  text: { type: String,required:true},
  image:{type:String,required:true},
}, {timestamps:true});

// Create or get the existing model
const PostModel = mongoose.models.PostModel || mongoose.model("PostModel", PostSchema);

// Export the model
export default PostModel;



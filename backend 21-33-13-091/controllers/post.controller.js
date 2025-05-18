import fs from "fs"
import PostModel from "../models/post.model.js"
//Add Post
const addPost = async (req,res)=>{
    const Post = new PostModel({
    topBtnText:req.body.topBtnText,
    heading:req.body.heading,
    image:req.file.filename,
    authername:req.body.authername,
    samllClock:req.body.samllClock,
    text:req.body.text,
    timestamp:req.body.timestamp
    })
    try {
        await Post.save();
        res.json({success:true,message:"Adding Post"})
    } catch (error) {
        console.error("Adding Post Error: ",error);
        res.json({success:false,message:"Error In Post"})
    }
};


//Update the Post
const updateMember = async (req, res) => {
    const { id,topBtnText,authername, heading, image,text,timestamp,samllClock } = req.body;
    try {
        const updatedMember = await PostModel.findByIdAndUpdate(
            id,
            { text, topBtnText,authername,heading,image, timestamp,samllClock}, // Fields to update
            { new: true, runValidators: true } // Return the updated document and run validation
        );
        if (!updatedMember) {
            return res.json({ success: false, message: "Member not found" });
        }
        res.json({ success: true, message: "Member updated successfully", member: updatedMember });
    } catch (error) {
        console.error("Error in updating member:", error);
        res.json({ success: false, message: "Error in updating member" });
    }
};
// Update Post


//Listing of the Post 


const ListPost = async (req,res)=>{
    try {
        const Post = await PostModel.find({});
        res.json({success:true,message:"Listing of the Food",data:Post});
    } catch (error) {
        console.error("Error In Listing",error);
        res.json({success:false,message:"Error In the Listing"});
    }
}
const removePost = async (req,res)=>{
    try {
        const postd = await PostModel.findById(req.body.id);
        fs.unlink(`uploads/${postd.image}`,()=>{});
        await PostModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Deleted Successfully"})
} catch (error) {
console.error("Error in removing in Item",error);
res.json({success:false,message:"Error: "})
}
}


export {addPost, ListPost,removePost,updateMember};

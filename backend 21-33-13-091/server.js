import express from "express"
import connectDb from "./db/index.db.js";
import { Postrouter } from "./routes/post.route.js";
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json());
connectDb();

// app.use("/",(req,res)=>{
//     res.send("Api working");
// })
app.use("/api/post",Postrouter);
app.use("/images", express.static("uploads"));
app.listen(4000,()=>{
    console.log("App listend: ");
})
import express from 'express'

const Postrouter = express.Router();

import multer from 'multer'
import { addPost, ListPost, removePost, updateMember } from '../controllers/post.controller.js';




const storege = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storege});
Postrouter.post("/add",upload.single('image'),addPost);
Postrouter.get("/List",ListPost);
Postrouter.post("/remove",removePost);
Postrouter.put("/update/:id",updateMember);

export  {Postrouter};


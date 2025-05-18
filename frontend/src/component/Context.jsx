import axios from "axios";
import {  createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = (props)=>{

const [blog,setBlog] = useState([]);
const url = "http://localhost:4000";



const fetchBlogList = async ()=>{
    const response = await axios.get("http://localhost:4000/api/post/List");
setBlog(response.data.data)
}
 
useEffect(()=>{
    async function loadData(){
        await fetchBlogList();
    }
    loadData();
})



const value = {
blog,
url
}
    return (
        <Context.Provider value={value}>
{props.children}
        </Context.Provider>
    )
}
export default ContextProvider;

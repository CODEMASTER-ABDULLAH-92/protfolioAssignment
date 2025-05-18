import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const List = () => {
  const [list,setList] = useState([]);
    const url = "http://localhost:4000"
  const fetchList = async ()=>{
    const response = await axios.get("http://localhost:4000/api/post/List");
    if(response.data.success){
      setList(response.data.data)
    }
    else{
      console.log("Listing Error");
    }
  }
  const removeItem = async (postId)=>{
    const response = await axios.post("http://localhost:4000/api/post/remove",{id:postId});
await fetchList();
if(response.data.success){
  console.log("Removed the Post");
}
else{
  console.log("error in romving");
}
  }
  useEffect(()=>{
    fetchList();
  })
  return (
    <div>
      {
        list.map((item,index)=>{
          return (
            <div key={index} className='flex gap-2 justify-center items-center'>
            <img src={`${url}/images/`+item.image} className='h-[80px] w-[120px] object-contain object-center' alt="" />
    <p>{item.authername}</p>
    <p>{item.heading}</p>
    <p>{item.samllClock}</p>
    <p onClick={()=>removeItem(item._id)} className='cursor-pointer'>X</p>


    <Link to={`/update/${item._id}`} className='px-6 py-2 ml-5 rounded-md bg-blue-400 text-xl'>UpDate</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default List;
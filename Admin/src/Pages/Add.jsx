import React, { useState } from 'react';
import { asset } from '../assets/asset';
import axios from 'axios';

const Add = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    topBtnText: "",
    heading: "",
    authername: "",
    samllClock: "",
    timestamp: "",
    text: "",
  });
  const [error, setError] = useState('');

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      // You can add validations here if you want to restrict file types or sizes
      setImage(file);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      setError('Please upload an image.');
      return;
    }

    const formData = new FormData();
    formData.append("topBtnText", data.topBtnText);
    formData.append("heading", data.heading);
    formData.append("authername", data.authername);
    formData.append("samllClock", data.samllClock);
    formData.append("timestamp", data.timestamp);
    formData.append("text", data.text);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:4000/api/post/add", formData);
      if (response.data.success) {
        setData({
          topBtnText: "",
          heading: "",
          authername: "",
          samllClock: "",
          timestamp: "",
          text: "",
        });
        setImage(null); // Reset image
        setError('');
        console.log('Data successfully added:', response.data);
      } else {
        console.error("Error adding post:", response.data.message);
        setError('Failed to add post.');
      }
    } catch (error) {
      console.error("Error in form submission", error);
      setError('An error occurred while submitting the form.');
    }
  };

  return (
    <div>
      <form className="ml-2 sm:ml-10 mt-6" onSubmit={onSubmitHandler}>
        <h1 className="text-2xl font-semibold">Create The Blog:</h1>
        <label htmlFor="image">
          <img 
            src={image ? URL.createObjectURL(image) : asset.upload_area} 
            className="h-[100px] w-[150px] object-contain object-center" 
            alt="Upload area" 
          />
        </label>

        <input 
          type="file" 
          id="image" 
          hidden 
          // required 
          onChange={onChangeImage} 
        />

        <div className="min-w-[500px] sm:flex-row flex-col flex gap-4 mt-4">
          <input 
            type="text" 
            required 
            placeholder="Top Btn Text" 
            name="topBtnText" 
            value={data.topBtnText} 
            onChange={onChangeHandler} 
            className="max-w-[50%] outline-none pl-2 border-gray-400 rounded-md text-xl py-[10px] border-[1px]" 
          />
          <input 
            type="text" 
            required 
            placeholder="Heading" 
            name="heading" 
            value={data.heading} 
            onChange={onChangeHandler} 
            className="max-w-[50%] py-[10px] text-xl outline-none pl-2 rounded-md border-gray-400 border-[1px]" 
          />
        </div>

        <div className="min-w-[500px] flex gap-4 mt-4 sm:flex-row flex-col">
          <input 
            type="text" 
            required 
            placeholder="Author Name" 
            name="authername" 
            value={data.authername} 
            onChange={onChangeHandler} 
            className="max-w-[50%] outline-none pl-2 border-gray-400 rounded-md text-xl py-[10px] border-[1px]" 
          />
          <input 
            type="text" 
            required 
            placeholder="Time Stamps" 
            name="timestamp" 
            value={data.timestamp} 
            onChange={onChangeHandler} 
            className="max-w-[50%] py-[10px] text-xl outline-none pl-2 rounded-md border-gray-400 border-[1px]" 
          />
        </div>

        <div className="min-w-[500px] flex gap-4 mt-4 sm:flex-row flex-col">
          <input 
            type="text" 
            required 
            placeholder="Text" 
            name="text" 
            value={data.text} 
            onChange={onChangeHandler} 
            className="max-w-[50%] py-[10px] text-xl outline-none pl-2 rounded-md border-gray-400 border-[1px]" 
          />
          <input 
            type="text" 
            required 
            placeholder="Small Clock" 
            name="samllClock" 
            value={data.samllClock} 
            onChange={onChangeHandler} 
            className="max-w-[50%] py-[10px] text-xl outline-none pl-2 rounded-md border-gray-400 border-[1px]" 
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" className="px-8 py-2 mt-3 rounded-md text-white text-xl bg-blue-600">
          Post
        </button>
      </form>
    </div>
  );
};

export default Add;
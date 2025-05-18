
import React from 'react';
import Nav from './Component/Nav';
import Side from './Component/Side';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add';
import List from './Pages/List';
import Update from './Pages/Update';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Nav />
      <div className='flex'>
      <Side />
      <Routes>
        <Route path="/" element={<Add />} />  {/* Use 'path' instead of 'to' */}
        <Route path="/list" element={<List />} />  {/* Use 'path' instead of 'to' */}
        {/* <Route path='/product/:productId' element={<Product/>}/> */}
        <Route path="/update/:id" element={<Update />} />  {/* Use 'path' instead of 'to' */}
      </Routes>
      </div>
    </div>
  );
};

export default App;

import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import { baseUrl } from '../components/baseUrl';
import Footer from '../components/Footer';

const CategoryPage = () => {
  const Location = useLocation();
  const category = Location.pathname.split("/").at(-1) ;
  const Navigate = useNavigate();
  return (
    <div>
      <Header/>
      <div className='grid place-items-center'>
        <div className='flex gap-3 w-[40rem] p-3'>
        <button onClick={()=>{Navigate(-1)}} className='border-2 bg-gray-300 py-[1px] px-3 rounded-lg'>Back</button>
            <h2 className='font-bold'>Blogs on <span className='text-blue-600 underline'> {category} </span> </h2>
        </div>
      </div>
            <Blogs baseUrl={baseUrl}/>
            <Footer/>
    </div>
  )
}

export default CategoryPage

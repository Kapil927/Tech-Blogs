import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context_Provider/ContextProvider';

export default function Footer() {
  const{page,totalPages, handlePageChange} = useContext(Context);
  return (
    <div className='text-center flex justify-around p-2'>
      <div className='flex gap-3'>
      {
        page<totalPages && <button onClick={()=>{handlePageChange(page+1)}} className='border-2 bg-gray-300 py-[1px] px-3 rounded-lg'>
        Next
        </button>
        
      }
      {
        page>1 && <button onClick={()=>{handlePageChange(page-1)}} className='border-2 bg-gray-300 py-[1px] px-3 rounded-lg'>
        Previous
        </button>
        
      }
      </div>
      {
        <span className='font-bold'>Page {page} of {totalPages}</span>
      }
    </div>
  )
}

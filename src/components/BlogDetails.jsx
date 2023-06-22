import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context_Provider/ContextProvider';
import Loader from './Loader';
import { Link} from 'react-router-dom';
export default function BlogDetails({post}) {
    const{loader} = useContext(Context);
    console.log(post);
  return (
    <div>
      <div className='grid place-items-center'>
        <div className=' max-w-2xl p-2 flex flex-col gap-5' >
      {
        loader ? <Loader/>:

            <div key={post.id} className='mt-1'>
            <h1 className='font-bold cursor-pointer hover:underline'><Link to={`/blogs/${post.id}`}>{post.title}</Link></h1>
            <span className='text-xs'>by <span className=' font-italic'>{post.author}</span> on <span className='font-bold underline cursor-pointer' ><Link to={`/categories/${post.category.replaceAll(" ","-")}`}>{post.category}</Link></span></span>
            <div className='text-xs'>Posted on {post.date} </div>
            <div className='mt-5 text-sm'>{post.content}</div>
            <div className='flex gap-2'>
              {
                post.tags.map((tag,index)=>{
                  return(<span key={index} className='underline text-blue-600 text-sm cursor-pointer select-none'> <Link key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>#{tag}</Link></span>)
                }) 
              }
            </div>        
            </div>
      }

    </div>
</div>
    </div>
  )
}

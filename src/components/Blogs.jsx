import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context_Provider/ContextProvider';
import Loader from './Loader';
import BlogDetails from './BlogDetails';

export default function Blogs() {
const{loader, posts} = useContext(Context);
  return (
    <div className="flex flex-col gap-y-10 my-4">
    {loader ? (
      <div className="min-h-[80vh] w-full flex justify-center items-center">
        <Loader/>
      </div>
    ) : posts.length === 0 ? (
      <div className="min-h-[80vh] w-full flex justify-center items-center">
        <p className="text-center font-bold text-3xl">No Blogs Found !</p>
      </div>
    ) : (
      posts.map((post) => (
        <BlogDetails key={post.id} post={post}/>
      ))
    )}
  </div>
  )
}

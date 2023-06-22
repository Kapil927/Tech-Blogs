import {React, useContext, useState, useEffect} from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import { Context } from '../Context_Provider/ContextProvider';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import Loader from '../components/Loader';

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState("");
  const [relatedBlogs, setRelatedBlogs] = useState("");
  const location = useLocation();
  const Navigation = useNavigate();
  const {loader, setLoader} = useContext(Context);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoader(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoader(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname] )
  
  return (
    <div>
    <Header/>
    <div className='grid place-items-center'>
        <div className='flex gap-3 w-[40rem] p-3'>
        <button className='border-2 bg-gray-300 py-[1px] px-3 rounded-lg'
         onClick={() => Navigation(-1)}
      >
          Back
      </button>
        </div>
      </div>
    
    {
      loader ?
      (<div>
          <Loader/>
      </div>) :
      blog ?
      (<div>
          <BlogDetails post={blog} />
          <div className='grid place-items-center'>
        <div className='flex gap-3 w-[40rem] p-3'>
          <h2 className='font-bold'> Related Blogs:- </h2>
          </div>
          </div>
          {
              relatedBlogs.map( (post) => (
                  <div key = {post.id}>
                      <BlogDetails post={post} />
                  </div>
              ) )
          }

      </div>) :
      (<div>
          <p>No Blog Found</p>
      </div>)
     
    }

  </div>
  )
}

export default BlogPage

import './App.css';
import { useContext } from "react";
import { Context } from "./Context_Provider/ContextProvider";
import { useEffect } from "react";
import { useSearchParams, useLocation, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";

export default function App() {

      const {fetchData} = useContext(Context);
    const[searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
  
    useEffect(()=>{
      const page = searchParams.get("page") ?? 1;
     if(location.pathname.includes("tag")){
      const tag = location.pathname.split("/").at(-1).replaceAll("_"," ");
      fetchData(Number(page), tag);
     }
                                                        
     if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("_"," ");
      fetchData(Number(page), null, category);
     }
      
     else{
      fetchData(Number(page));
                                          }
                  },[location.pathname, location.search]);

  return (

    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/blogs/:blogId" element={<BlogPage/>}/>
    <Route path="/categories/:category" element={<CategoryPage/>}/>
    <Route path="/tags/:tag" element={<TagPage/>}/>
    <Route path="*" element={<div>Not found</div>}></Route>
   </Routes> 
      </div>
    </div>
  );
}

import { createContext } from "react";
import { useState, useEffect } from "react";
import { baseUrl } from "../components/baseUrl";
import toast from 'react-hot-toast'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

export default function ContextProvider({children}){ // is function ko ek parent tag ki tarha use karen ge jis bhi component ko is context pass karna hai 
    const[loader, setLoader] = useState(false);
    const[posts, setPosts] = useState([]);
    const[page, setPage] = useState(1);
    const[totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();
 
async function fetchData(page = 1, tag, category){
    setLoader(true);
    let url =`${baseUrl}?page=${page}`;
    if(tag) url+=`&tag=${tag}`
    if(category) url+=`&tag=${category}`
    
    try{
        const data = await axios.get(url); // axios seedha json me deta hai.
        setPage(data.data.page);
        setPosts(data.data.posts);
        setTotalPages(data.data.totalPages);
    }
    catch(error){
        toast.error('Data not fetched');
        setPage(1);
        setPosts([]);
        setTotalPages(null);
    }
    setLoader(false);
}    
useEffect(()=>{fetchData()},[]);

function handlePageChange(page){
    setPage(page); 
    navigate( { search: `?page=${page}`});
    fetchData(page);
}

    const value ={loader,
                  setLoader,
                  posts,
                  setPosts,
                  page,
                  setPage,
                  totalPages,
                  setTotalPages,
                  handlePageChange,
                  fetchData};


          // rember this syntax to return context
    return <Context.Provider value={value}>  
                {children}
                    
    </Context.Provider>              

    }
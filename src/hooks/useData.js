import { useEffect, useState } from "react";


const useData = () => {
      const [products,setProducts]=useState([]);
      const [categories,setCategories]=useState([]);
      const [sections,setSection]=useState([]);
      const [blogs,setBlogs]=useState([]);
         useEffect(()=>{
            fetch('/products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
        },[]);
        useEffect(()=> {
            fetch("/categories.json")
            .then(res=> res.json())
            .then(data=> setCategories(data))
        },[]);
        useEffect(()=> {
            fetch("/sections.json")
            .then(res=> res.json())
            .then(data=> setSection(data))
        },[]);
        useEffect(()=> {
            fetch("/blog.json")
            .then(res=> res.json())
            .then(data=> setBlogs(data))
        },[])
    return {products,categories,sections,blogs}
};

export default useData;
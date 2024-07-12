import { useEffect } from 'react';
import axios from './Axios';
import React, { createContext, useState } from 'react';

export const ProductContext = createContext();
function Context(props) {
    const [products, setProducts]= useState(null);
    const getProducts= async ()=>{
        try {
            const {data}= await axios("/products");
           setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
getProducts();
    },[])
    
  return (
<ProductContext.Provider value={[products, setProducts]}>
{props.children}
</ProductContext.Provider>
   
  )
}

export default Context;
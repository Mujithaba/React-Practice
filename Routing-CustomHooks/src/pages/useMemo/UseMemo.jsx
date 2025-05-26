import React, { useMemo, useState } from "react";
import useFetch from "../../hooks/use-Fetch";

export default function UseMemo() {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [flag,setFlag]= useState(false)

  console.log(data, "uii");

  function filterProductByPrice(getProduct) {
    console.log('The flag is changing');
    
    return Array.isArray(getProduct)
      ? getProduct.filter((item) => item.price > 9)
      : [];
  }

  const memorizedVersion = useMemo(()=>(
  filterProductByPrice(data?.products)
  ),[data?.products])

// function filterProductByPrice(getProduct) {
//     return getProduct.length > 0
//       ? getProduct.filter((item) => item.price > 9)
//       : [];
//   }

  if (loading) {
    return <h2>data loading ,  Please wait</h2>
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" , color:flag ? 'red' : 'black'}}>useMemo Hook</h1>
      <button onClick={()=> setFlag(!flag)}>Toggle Btn</button>
      {memorizedVersion.map((items) => (
        <li>{items.title}</li>
      ))}
    </div>
  );
}

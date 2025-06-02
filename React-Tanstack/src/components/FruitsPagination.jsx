import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function FruitsPagination() {
  const FetchData = () => {
    return axios.get("http://localhost:4000/fruits");
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fruits"],
    queryFn: FetchData,
  });

  if (isLoading) return <h2>Page Loading....</h2>;
  if (isError) return <h2>The page is error:{error.message}</h2>;


  console.log(data);
  

  return (
    <div>
      <h2>Fruits Pagination</h2>
      <div>
        {data?.data?.map((item)=>(
            <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

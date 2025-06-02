import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetailsRQ() {
  const { id } = useParams();
  console.log(id, "id");

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["post", id],
    queryFn: async() => {
      return await axios.get(`http://localhost:4000/posts/${id}`);
    },
  });

  if (isError) return <div>Something went wrong, {error.message}</div>;

  if (isLoading) return <div>Data is loading...!</div>;

  const { title, views } = data?.data;

  return (
    <div>
      <h1>Post Details RQ</h1>
      <div>
        <p>{id}</p>
        <p>{title}</p>
        <p>{views}</p>
      </div>
    </div>
  );
}

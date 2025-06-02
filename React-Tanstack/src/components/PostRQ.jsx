import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const addPost = (posts) => {
  return axios.post("http://localhost:4000/posts", posts);
};

export default function PostRQ() {
  const [title, setTitle] = useState("");
  const [views, setViews] = useState("");
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get("http://localhost:4000/posts");
    },
    // enabled: false,
    // staleTime:30000
    // refetchInterval:1000,
    // refetchIntervalInBackground:true
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addPost,
    onSuccess: (newData) => {
      // queryClient.invalidateQueries("posts");  //it is take another get request.

      queryClient.setQueryData(["posts"],(oldData)=>{  // it is optimized without get rquest for one added data
        return {
          ...oldData,
          data:[...oldData.data,newData.data]
        }
      })

    },
  });

  console.log({ isLoading, isFetching });

  if (isError) return <div>Something went wrong, {error.message}</div>;

  if (isLoading) return <div>Data is loading...!</div>;

  console.log(data?.data);

  const id = String(data?.data?.length + 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    const posts = { id:id, title:title, views:views };
    console.log(posts);

    mutate(posts);
    setTitle("");
    setViews("");
  };

  console.log(data?.data);

  return (
    <div>
      <h1>Post React Query Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="views"
          value={views}
          onChange={(e) => setViews(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={refetch}>Fetch Posts</button>
      <ul>
        {data?.data?.map((items) => (
          <Link key={items.id} to={`/post-rq/${items.id}`}>
            <li>{items.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

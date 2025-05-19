import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
  const [posts, setPost] = useState();
  const { id } = useParams();
  console.log(id);

  const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    console.log(data);
    setPost(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!posts) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h2>Details</h2>
      <Link to={"/posts"}>back</Link>
      <hr />
      <p>{posts.title}</p>
    </div>
  );
}

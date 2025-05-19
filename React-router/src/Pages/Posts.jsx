import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPost] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    setPost(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>Posts</h2>
      <Link to={"/"}>home</Link>
      <hr />
      <ol>
        {posts.map((post) => (
          <li>
            <Link to={`${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

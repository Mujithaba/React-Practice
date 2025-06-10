import React from "react";
import CounterValue from "./counter-example/CounterValue";
import CounterButton from "./counter-example/CounterButton";
import AddNewBlog from "./blog-app/AddNewBlog";
import BlogList from "./blog-app/BlogList";

export default function App() {
  return (
    <div style={{margin:'12px'}}>
      <h1>Blog App</h1>
      <AddNewBlog/>
      <BlogList/>
      {/* <CounterValue />
      <CounterButton /> */}
    </div>
  );
}

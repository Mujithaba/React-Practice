import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editCurrentBlog,
  handleAddToDo,
  handleInputChange,
  setCurrentBlogId,
} from "../store/slices/blogSlice";

export default function AddNewBlog() {
  const state = useSelector((state) => state);
  console.log(state);

  const dispatch = useDispatch();

  function handleInput(event) {
    dispatch(
      handleInputChange({
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleAddToDoSubmit(event) {
    event.preventDefault();
    if (state.blog.getCurrentBlogId) {
      dispatch(editCurrentBlog());
    } else {
      dispatch(handleAddToDo());
    }

    dispatch(setCurrentBlogId({ blogId: null }));
    dispatch(
      handleInputChange({
        title: "",
        description: "",
      })
    );
  }

  return (
    <div>
      <form onSubmit={handleAddToDoSubmit}>
        <div>
          <label>Enter Blog Title </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Blog Title"
            onChange={handleInput}
            value={state.blog?.formData?.title}
          />
        </div>
        <div>
          <label>Enter Blog Description </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter Blog Description"
            onChange={handleInput}
            value={state.blog?.formData?.description}
          />
        </div>
        <button type="submit">
          {state.blog.getCurrentBlogId ? "Edit The Blog" : "Add New Blog"}
        </button>
      </form>
    </div>
  );
}

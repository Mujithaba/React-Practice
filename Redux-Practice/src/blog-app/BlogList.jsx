import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBlogItem,
  handleInputChange,
  setCurrentBlogId,
} from "../store/slices/blogSlice";

export default function BlogList() {
  const dispatch = useDispatch();
  const { blogList } = useSelector((state) => state.blog);

  function handleDelete(getBlodId) {
    console.log(getBlodId, "oo");
    dispatch(deleteBlogItem({ id: getBlodId }));
  }

  function handleSetBlog(getBlod) {
    dispatch(setCurrentBlogId({ blogId: getBlod?.id }));
    dispatch(
      handleInputChange({
        title: getBlod?.title,
        description: getBlod?.description,
      })
    );
  }

  return (
    <div>
      <ul>
        {blogList.length > 0 ? (
          blogList.map((singleItem) => (
            <div
              key={singleItem?.id}
              style={{ border: "2px solid red", padding: "7px" }}
            >
              <h2>{singleItem.title}</h2>
              <h2>{singleItem.description}</h2>
              <button
                onClick={() => handleDelete(singleItem?.id)}
                style={{ marginRight: "12px" }}
              >
                Delete blog
              </button>

              <button onClick={() => handleSetBlog(singleItem)}>
                Edit blog
              </button>
            </div>
          ))
        ) : (
          <h1>No blog found now, Please try later</h1>
        )}
      </ul>
    </div>
  );
}

import React from "react";
import useFetch from "../../hooks/use-Fetch";

export default function CommentsList() {
  const { data, error, loading } = useFetch("https://dummyjson.com/comments");

  if (loading) {
    return <div>Data fetching from the comments api,Please wait a moment</div>;
  }

  return (
    <div>
      <h2 style={{ color: "green" }}>Cooments list Page for react router</h2>
      <ul>
        {data?.comments?.length > 0
          ? data?.comments.map((comment) => (
              <div>
                <li>{comment.body}</li>
                <li>{comment.user.fullName}</li>
                <li>{comment.likes}</li>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

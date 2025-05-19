import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/use-Fetch";

export default function RecipeList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");

  const location = useLocation();

  const navigate = useNavigate();
  console.log(location);

  if (loading) return <div>Data fetching is loading, Please a second</div>;

  return (
    <div>
      <h2 style={{ color: "yellowgreen" }}>
        Recipe list Page for react router
      </h2>

      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes.map((recipe) => (
              <div>
                <img src={recipe.image} alt={recipe.name} />
                <li>{recipe.name}</li>
              </div>
            ))
          : null}
      </ul>

      <button
        style={{
          backgroundColor: "black",
          color: "white",
          margin: "5px",
          borderRadius: "6px",
          border: "none",
          padding: "9px",
        }}
        onClick={() => navigate("/home/data-page")}
      >
        Click for Data
      </button>
    </div>
  );
}

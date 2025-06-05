// pagination using query parameter ----------------------------------------------
// Dummy posts
const allPosts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
  { id: 5, title: "Post 5" },
];

const POSTS_PER_PAGE = 2;

function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;

  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const visiblePosts = allPosts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const goToPage = (newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog - Page {page}</h2>

      <ul>
        {visiblePosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            style={{
              marginRight: "10px",
              background: page === i + 1 ? "black" : "white",
              color: page === i + 1 ? "white" : "black",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

// export default BlogPage;







//filter using query parameter---------------------------------------


// ProductsPage.jsx
import React from "react";
import { useSearchParams } from "react-router-dom";

const allProducts = [
  { id: 1, name: "Red Shoes", category: "shoes", color: "red" },
  { id: 2, name: "Blue Shoes", category: "shoes", color: "blue" },
  { id: 3, name: "Red Shirt", category: "clothes", color: "red" },
  { id: 4, name: "Green Hat", category: "accessories", color: "green" },
];

const categories = ["all", "shoes", "clothes", "accessories"];
const colors = ["all", "red", "blue", "green"];

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read query params or default to "all"
  const category = searchParams.get("category") || "all";
  const color = searchParams.get("color") || "all";
  console.log("category:"+category,"color:"+color)

  // Filter products based on params
  const filteredProducts = allProducts.filter((product) => {
    if (category !== "all" && product.category !== category) return false;
    if (color !== "all" && product.color !== color) return false;
    return true;
  });

  // Update query params when filters change
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    if (newCategory === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", newCategory);
    }
    setSearchParams(searchParams);
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    if (newColor === "all") {
      searchParams.delete("color");
    } else {
      searchParams.set("color", newColor);
    }
    setSearchParams(searchParams);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Category:{" "}
          <select value={category} onChange={handleCategoryChange}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label style={{ marginLeft: "20px" }}>
          Color:{" "}
          <select value={color} onChange={handleColorChange}>
            {colors.map((col) => (
              <option key={col} value={col}>
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} ({product.category} / {product.color})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductsPage;

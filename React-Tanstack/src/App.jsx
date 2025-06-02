import { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostRQ from "./components/PostRQ";
import PostDetailsRQ from "./components/PostDetailsRQ";
import FruitsPagination from "./components/FruitsPagination";

function App() {
  return (
    <Router>
      <div style={{display:'flex',flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <nav >
          <ul style={{display:'flex', gap:'90px', listStyle:"none",fontSize:'25px'}}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"postqr"}>PostRQ</Link>
            </li>
            <li>
              <Link to={"pagination-qr"}>Fruits</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postqr" element={<PostRQ />} />
          <Route path="/post-rq/:id" element={<PostDetailsRQ/>} />
          <Route path="/pagination-qr" element={<FruitsPagination/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

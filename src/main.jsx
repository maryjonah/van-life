import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";


function App() {
    return (
      <BrowserRouter>
          <header>
              <Link className="site-logo" to="/">#VanLife</Link>
              <nav>
                  <Link to="/about">About</Link>
              </nav>
          </header>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
          </Routes>
      </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

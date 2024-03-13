import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Graphing from "./pages/Graphing";

function App() {

  let items = [
    "Chest",
    "Shoulders",
    "Biceps",
    "Triceps",
    "Forearms",
    "Upper back",
    "Middle back",
    "Lower Back",
    "Hips",
    "Quads",
    "Hammstrings",
    "Glutes",
    "Calves",
  ];

  return (
    <>
      <nav>
        <ul className="NavBar">
          <li className="NavBarItem">
            <Link to="/">About </Link>
          </li>
          <li className="NavBarItem">
            <Link to="/Graphing">Graphing</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Graphing" element={<Graphing items={items} heading='muscles' />} />
        </Routes>
      </div>

    </>
  );
}

export default App;

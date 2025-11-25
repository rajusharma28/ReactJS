import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import HI from "./HI";
import Details from "./Details";
import Hello from "./hello";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
         <Link to="/Details">Details</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Details"element={<Details/>}></Route>

        <Route index element={<HI></HI>}></Route>
        <Route  path="/Hello" element={<Hello></Hello>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

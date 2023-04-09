import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Topbar from "./Topbar";
import FoodWasteTracker from "./FoodWasteTracker";
import MainContent from "./MainContent";
import Dashboard from "./Dashboard";
// import Login from "./Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {/* <Route path="/login" element={<Login />} />         */}
        <Route path="/foodwastetracker" element={<FoodWasteTracker />} />
      </Routes>
      </div>
    </Router>
  );
}


export default App;

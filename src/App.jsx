import { Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import RecipePage from "./components/RecipePage";
import NavBar from "./components/Navbar";

/* Import React components */



function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home/:ID" element={<RecipePage />} />
    </Routes>
    
    </>
  )
}

export default App;

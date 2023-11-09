import { Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from "react";
import RecipePage from "./components/RecipePage";
import NavBar from "./components/NavBar";
import RpidApiRecipes from "./components/RapidApiRecipes";
import RapidApiSinglePage from "./components/RapidApiSinglePage";
import Footer from "./components/Footer";

/* Import React components */



function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home/:ID" element={<RecipePage />} />
      <Route path="/RapidApi" element= {<RpidApiRecipes/>} />
      <Route path="/RapidApi/:ID" element= {<RapidApiSinglePage/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;

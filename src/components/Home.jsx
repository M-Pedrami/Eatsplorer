import React from 'react'
import getAllRecipes from "../hooks/getAllRecipes";
import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { Container } from 'react-bootstrap';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getAllRecipes()
      .then((data) => setRecipes(data))
      .catch((err) => console.log("Maziar !!!Error from App.jsx", err));
  }, []);
  console.log(recipes);
  return (
    <div>
      <Container>
      <div className="container d-lg-flex justify-content-lg-between align-items-center text-center mb-lg-5">
        <h2>Popular Recipes</h2>
        <hr />
      </div>
      <div className="container">
        <div className="row g-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.fields.name} recipe={recipe} />
          ))}
        </div>
      </div>
    </Container>
    </div>
  )
}

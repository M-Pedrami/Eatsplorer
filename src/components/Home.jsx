/* Import custom Hooks */
import getAllRecipes from "../hooks/getAllRecipes";

/* Import React Hooks */
import { useState, useEffect } from 'react';

/* Import React Components */
import RecipeCard from './RecipeCard';

/* Import Bootstrap Components */
import { Container } from 'react-bootstrap';
import SearchRecipe from "./SearchRecipe";

export default function Home() {

  /* Defining the state  */
  const [recipes, setRecipes] = useState([]);

  /* Fetching the data using the custom hook declared within useEffect hook and the setting the state with the retrieved data */
  useEffect(() => {
    getAllRecipes()
      .then((data) => setRecipes(data))
      .catch((err) => console.log("Maziar !!!Error from App.jsx", err));
  }, []);


  
  return (
    <div>
      <SearchRecipe recipe={recipes}/>
      <Container>
      <div className="container p-5">
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

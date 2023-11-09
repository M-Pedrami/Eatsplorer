/* Import custom Hooks */
import getAllRecipes from "../hooks/getAllRecipes";

/* Import React Hooks */
import { useState, useEffect } from 'react';

/* Import React Components */
import RecipeCard from './RecipeCard';

/* Import Bootstrap Components */
import { Container } from 'react-bootstrap';
import SearchRecipe from "./SearchRecipe";
import BasicPagination from "./Pagination";

export default function Home() {

  /* Defining the state  */
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalRecipes, setTotalRecipes] = useState(0)
  const pageSize= 4

  /* Fetching the data using the custom hook declared within useEffect hook and the setting the state with the retrieved data */
  useEffect(() => {
    getAllRecipes((currentPage - 1) * pageSize)
      .then((data) => {
        setRecipes(data.recipes);
        setTotalRecipes(data.total);
      })
      .catch((err) => console.log('Error from App.jsx', err));
  }, [currentPage]);


  
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
    <BasicPagination count={Math.ceil(totalRecipes / pageSize)}  onChange={(event, value) => setCurrentPage(value)}/>
    </div>
  )
}

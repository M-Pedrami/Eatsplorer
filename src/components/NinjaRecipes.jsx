import { useEffect, useState } from "react";
import getRecipeNinja from "../hooks/getRecipeNinja";
import { Container, InputGroup, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

export default function recipes() {
  /* In order to conditionally run the hook in useEffect the initiall state needs to be changed to null */
  const [recipes, setRecipes] = useState(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    /* I should conditionally run the hook because without providing a query id get a badgateway error from the hook */
    if (query) {
      getRecipeNinja(query)
        .then((res) => setRecipes(res))
        .catch((err) => console.log("NinjaRecipies Component", err));
    }
  }, [query]);
  console.log(recipes);
  return (
    
    <div>
    <div>
      <Container className="SearchBox">
        <h1>Find A Recipe</h1>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg" placeholder="">
            <Search className="searchIcon" />
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </InputGroup>
      </Container>
    </div>
    <div>
      {recipes === null ? (
        <h1>Search for a recipe...</h1>
      ) : recipes.length === 0 ? (
        <h1>No recipes found.</h1>
      ) : (
        recipes.map((recipe, index) => (
          <h1 key={index}>{recipe.title}</h1>
        ))
      )}
    </div>
  </div>
    
  );
}

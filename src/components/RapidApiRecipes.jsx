import { useEffect, useState } from "react";
import getRapidApi from "../hooks/getRapidApi";
import { Container, InputGroup, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import data from '../hooks/data.json'
import RecipeCardRapidApi from "./RecipeCardRapidApi";

export default function RpidApiRecipes() {
  /* In order to conditionally run the hook in useEffect the initiall state needs to be changed to null */
  const [recipes, setRecipes] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [query, Setquery] = useState("")
  const testData = data.results
  useEffect(() => {
    /* I should conditionally run the hook because without providing a query id get a badgateway error from the hook */
    if (query) {
      getRapidApi(query)
        .then((res) => setRecipes(res))
        .catch((err) => console.log("RapidApi Component", err));
    }
  }, [query]);
  console.log("RapidApi:::",recipes);
  /* console.log("KeyWord:::",keyword)
  console.log("TestData:::",testData) */
  return (
    
    <div>
    <div>
      <Container className="SearchBox">
        <h1>Find A Recipe</h1>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg" placeholder="">
            <Search onClick={()=>Setquery(keyword)} className="searchIcon" />
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
        </InputGroup>
      </Container>
    </div>
    <Container>
       <div className="container p-5">
       {/*  <div className="row g-4">
      {recipes.map((recipe, index) => (
          <RecipeCardRapidApi recipe={recipe} key={index} />
        )) }
        </div> */}
      </div> 
        {recipes === null ? (
        <h1>Search for a recipe...</h1>
      ) : recipes.length === 0 ? (
        <h1>No recipes found.</h1>
      ) : (
        <div className="Container p-5">
          <div className="row g-4">
          {recipes.map((recipe, index) => (
          <RecipeCardRapidApi recipe={recipe} key={index} />
        )) }
          </div>
        </div>
        
        
      )}
    </Container>
  </div>
    
  );
}

import { useEffect, useState } from "react";
import getRapidApi from "../hooks/getRapidApi";
import { Container, InputGroup, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import data from '../hooks/data.json'

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
  console.log("RapidApi",recipes);
  console.log(keyword)
  console.log(testData)
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
    <div>
      {testData.map((recipe, index) => (
          <h1 key={index}>{recipe.title}</h1>
        )) }
      {/* {recipes === null ? (
        <h1>Search for a recipe...</h1>
      ) : recipes.length === 0 ? (
        <h1>No recipes found.</h1>
      ) : (
      
        
        recipes.map((recipe, index) => (
          <h1 key={index}>{recipe.title}</h1>
        )) 
      )} */}
    </div>
  </div>
    
  );
}

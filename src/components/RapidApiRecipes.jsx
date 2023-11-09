import { useEffect, useState } from "react";
import getRapidApi from "../hooks/getRapidApi";
import { Container, InputGroup, Form, Pagination } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import data from '../hooks/data.json'
import RecipeCardRapidApi from "./RecipeCardRapidApi";
import BasicPagination from "./Pagination";

export default function RpidApiRecipes() {
  /* In order to conditionally run the hook in useEffect the initiall state needs to be changed to null */
  const [recipes, setRecipes] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [query, Setquery] = useState("")
  const [currentPage, setCurrentPage]=useState(1)
  const [totalResults, setTotalResults]=useState(0)

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value)
  }
  const handleSearch = () => {
    Setquery(keyword)
  }
  useEffect(() => {
    /* I should conditionally run the hook because without providing a query id get a badgateway error from the hook */
    if (query) {
      const offset = (currentPage-1) * 9;
      getRapidApi(query, offset)
        .then((res) => {setRecipes(res.results); setTotalResults(res.totalResults)})
        .catch((err) => console.log("RapidApi Component", err));
    }
  }, [query, currentPage]);
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
            <Search onClick={handleSearch} className="searchIcon" />
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
    <BasicPagination count={Math.ceil(totalResults / 9)} onChange={handlePaginationChange}/>
    </Container>
  </div>
    
  );
}

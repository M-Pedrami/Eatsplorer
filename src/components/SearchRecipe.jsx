import { Form, InputGroup, Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "../styles/SearchBox.css";
import { useState } from "react";

export default function SearchRecipe({
  handleSearch,
}) {
  /* console.log("SearchRecipe",recipe) */
  const [keyword, setKeyword] = useState("");
  return (
    <Container className="SearchBox">
      <h1>Find A Recipe</h1>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg" placeholder="">
          <Search className="searchIcon" />
        </InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => {
            setKeyword(e.target.value);
            handleSearch(e.target.value)
            console.log(keyword);
          }}
          
        />
      </InputGroup>
    </Container>
  );
}

import { Form, InputGroup, Container } from "react-bootstrap"
import { Search } from "react-bootstrap-icons"
import '../styles/SearchBox.css'

export default function SearchRecipe({recipe}) {
  console.log("SearchRecipe",recipe)
  return (
    <Container className="SearchBox">
      <h1>Find A Recipe</h1>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg" placeholder=""><Search className="searchIcon"/></InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </Container>
  )
}

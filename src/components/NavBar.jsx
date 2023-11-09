import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import '../styles/NavBar.css'
import logo from '../assets/logo.png'

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-secondary" >
      <Container >
        <Navbar.Brand href="#home" id="brandContainer"><img id="brandLogo" src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="Navigation">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/RapidApi">RapidApi</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fast and Deliscious</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Persian Cousine
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vegan</NavDropdown.Item>           
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar className='h1' href="#home">Restaurant</Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="sm me-auto ms-5 ">
            <Nav.Link className='ms-3' href="#home">Home</Nav.Link>
            <Nav.Link className='ms-3' href="#link">Pages</Nav.Link>
            <Nav.Link className='ms-3' href="#home">Menus</Nav.Link>
            <Nav.Link className='ms-3' href="#link">Blog</Nav.Link>
          </Nav>
          <Nav className="me-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Pages</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
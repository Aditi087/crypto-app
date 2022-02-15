import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './nav.css'

function Navv() {
  return (
    <div>
        <Navbar fixed='top' bg="light" variant="light" id="nav">
    <Container>
    <Navbar.Brand id="navHead" as={Link} to="/">Crypto</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link className='navoption' as={Link} to="/">Home</Nav.Link>
      <Nav.Link className='navoption' href="#features">Features</Nav.Link>
      <Nav.Link className='navoption' href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>


  {/* <nav class="navbar fixed-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed top</a>
  </div>
</nav> */}
    </div>
  )
}

export default Navv;
import { Navbar, Nav } from 'react-bootstrap';

const NavBarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Navbar.Brand href="/">React Next Aplication</Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/journey">Jornada</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;

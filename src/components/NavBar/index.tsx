import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const NavBarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Navbar.Brand href="/">React Next Aplication</Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="mr-4">
          <Link href="/" passHref>
            <Nav.Link className="mr-2">Início</Nav.Link>
          </Link>
          <Link href="/journey" passHref>
            <Nav.Link>Jornada</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;

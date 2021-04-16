import { Navbar, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';

const NavBarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Link href="/" passHref>
        <Navbar.Brand href="/">React Next Aplication</Navbar.Brand>
      </Link>
      <Navbar.Toggle />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="mr-4">
          <Link href="/" passHref>
            <Nav.Link className="mr-2">Início</Nav.Link>
          </Link>
          <Link href="/chronometer" passHref>
            <Nav.Link className="mr-2">Cronometro</Nav.Link>
          </Link>
          <Link href="/journey" passHref>
            <Nav.Link className="mr-2">Jornada</Nav.Link>
          </Link>
          <Link href="/pdf" passHref>
            <Nav.Link className="mr-4">Pdf</Nav.Link>
          </Link>
          <Link href="/login" passHref>
            <Button variant="outline-secondary">Login</Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;

import { Navbar, Nav } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="bottom">
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>
          Feito por: <a href="https://github.com/BrenoHA">BrenoHA</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default FooterComponent;

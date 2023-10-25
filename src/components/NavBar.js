import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      {" "}
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-light">
            Afshal Maharjan
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end gap-2">
            <Navbar.Text className="text-light">Contact </Navbar.Text>
            <Navbar.Text className="text-light">About</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      ;
    </>
  );
};
export default NavBar;

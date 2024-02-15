import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";

function Header() {
    return (
        <Navbar bg='dark' data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/whatson">What&apos;s On</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

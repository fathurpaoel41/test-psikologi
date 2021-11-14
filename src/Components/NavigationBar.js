import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Routes, Route, Link } from "react-router-dom"
import Contact from "../Pages/Contact/Contact"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import "../Assets/Style.css"
import DesclaimerSoal from "../Pages/Declaimer/DesclaimerSoal"

export default function NavigationBar() {

        const styleLink = {
            textDecoration: "none",
            color: "white"
        }


    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">In Your Brain</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/" style={styleLink}>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/about" style={styleLink}>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/contact" style={styleLink}>Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/soal" element={<DesclaimerSoal />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    )
}

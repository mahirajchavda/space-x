import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="nav-link" to="/">
                <img src="logo24.png" alt="NoPhoto" />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/ships">
                Ships
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/rockets">
                Rockets
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/favorite">
                Favorite
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation

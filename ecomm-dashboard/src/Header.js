import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();
  let user = JSON.parse(localStorage.getItem('user-info'))

  function logOut() {
    localStorage.clear();
    history.push('/login')
  }
  return (
    <div>
      <Navbar className="navbar navbar-dark bg-dark">
        <Container>
          <Link className="navbar-brand" to="/">Home</Link>
          <Nav className="me-auto">
            {
              localStorage.getItem('user-info') ?
                <>
                  <Link className="nav-link" to="/add">Add Product</Link>
                  <Link className="nav-link" to="/update">Update Product</Link>
                  <Link className="nav-link" to="/search">Search</Link>
                </>
                :
                <>
                  <Link className="nav-link" to="/login">Login</Link>
                  <Link className="nav-link" to="/register">Register</Link>
                </>
            }
          </Nav>
          {localStorage.getItem('user-info') ?
            <Nav>
              <NavDropdown title={user.name}>
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            : null}
        </Container>
      </Navbar>
      <br />
    </div>
  )
}

export default Header
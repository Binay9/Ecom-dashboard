import {Link} from 'react-router-dom';

import {Navbar, Nav} from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    <Link to="/">Home</Link>
                    <Link to="/add">Add Product</Link>
                    <Link to="/update">Update Product</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;
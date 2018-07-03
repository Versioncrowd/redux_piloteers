import React from 'react';
import { Row, Col } from 'reactstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Row>
            <Col>
                <header>
                  <nav>
                    <ul>
                      <li><Link to="/">My Awesome Blog</Link></li>
                    </ul>
                  </nav>
                </header>
            </Col>
        </Row>  
    )
}
 
export default Navbar;
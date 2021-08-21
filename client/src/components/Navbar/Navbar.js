import React from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs'
import { useHistory } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap'
// import './navbar.css'

export default function NavBar({ categories, selectedCategory, setSelectedCategory }) {
    const history = useHistory();

    const handleChange = () => {
        if (selectedCategory === 'all') {
            return history.push('/categories')
        }

        history.push(`/products/${selectedCategory}`);
    }


    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      
    )
}

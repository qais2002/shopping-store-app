import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './categories.css'

export default function Categories({ categories, products }) {

    const displayProducts = (category) => {
        return <div>
                    <img src={category.categoryImg} />
                </div>  
    }

    return (
        <>
            <Container fluid style={{ backgroundColor: "whiteSmoke" }}  >
                <Row style={{ "margin-left": 0, "margin-right": 0 }}>
                    { categories && categories.map((category) => (
                        <Col xs={12} sm={6} md={6} lg={4} xl={3} style={{ "padding": 10 }} >
                            <Container style={{ backgroundColor: "white" }} >
                                <h4 style={{ padding: "10px" }} >{category.categoryName}</h4>
                                {products && displayProducts(category) }
                                <Link style={{ padding: "10px" }} to={`/products/${category.categoryName.toLowerCase()}`} >Shop</Link>
                            </Container>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

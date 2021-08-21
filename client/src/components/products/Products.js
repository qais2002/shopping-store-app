import { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import apiUrl from '../../axios';
import { Container, Row, Col } from 'react-bootstrap';
import "./products.css"

export default function Products({ match }) {
    const [products, setProducts] = useState(null);
    const history = useHistory();

    const { params: { category } } = match;

    useEffect(() => {
        const doRequest = async () => {
            try {
                const { data } = await apiUrl.get(`/products/${category}`);
                setProducts(data);
                console.log(category, data);
            } catch (err) {
                console.log(err)
            }
        }

        doRequest();
    }, [category]);

    const handleProduct = (productId, productCategory) => {
        history.push(`/products/${productCategory}/${productId}`);
    }

    return (
        <>      
            <Container fluid>
                <Row  >
                    { products && products.map((product) => (
                        <Col xs={12} sm={6} md={6} lg={4} style={{ "padding": 10,  }} >
                            <img src={product.imageUrl} />
                            <h2>{product.name}</h2>
                        </Col>
                    )) }
                </Row>
            </Container>
        </>
    )
}
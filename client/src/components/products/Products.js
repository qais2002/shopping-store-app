import { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import apiUrl from '../../axios';
import './products.css'

export default function Products({ match }) {
    const [products, setProducts] = useState(null);
    const history = useHistory();

    const { params: { category } } = match;

    useEffect(() => {
        const doRequest = async () => {
            try {
                const { data } = await apiUrl.get(`/products/${category}`);
                setProducts(data);
                // console.log(category, data);
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
            <div className="products-container">
                { products && products.map((product) => (
                        <div onClick={() => handleProduct(product._id, category)} className="product" key={product._id}>
                            <img src={product.imageUrl} alt="product" />
                            <div className="product-name">
                                <h2>{product.name}</h2>
                            </div>
                            <span>${product.price}</span>
                        </div>
                    )
                ) }
            </div>
        </>
    )
}
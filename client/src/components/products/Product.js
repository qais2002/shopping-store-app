import React, { useState, useEffect } from 'react'
import apiUrl from '../../axios';

export default function Product({ match }) {
    const [product, setProduct] = useState(null);

    const { params: { category, productID } } = match;

    useEffect(() => {
        const doRequest = async () => {
            const { data } = await apiUrl.get(`/products/${productID}`);
            setProduct(data);
            console.log(data);
        }

        doRequest();
    }, []);

    console.log(match)

    return (
        <>
            { product && 
                <div>
                    <div>
                        <img src={product.imageUrl} alt="productImage" />
                    </div>
                    <div>
                        <h2>{product.name}</h2>
                        <h4>${product.price}</h4>
                        <h4>Quantity{product.countInStock}</h4>
                    </div>
                </div>
            }
        </>
    )
}

import React from 'react'
import { Link } from 'react-router-dom';
import './categories.css'

export default function Categories({ categories, products }) {

    const displayProducts = (category) => {
        const categoryImages = products[category].slice(0, 4).map((product) => {
            return (
                <div>
                    <img src={product.imageUrl} />
                </div>
            )
        });

        return categoryImages
    }

    return (
        <>
            <div className="categories-container" >
                {categories && categories.map((category) => (
                   <div className="category">
                       <div className="category-name" >
                            <span>{category}</span>
                        </div>
                        <div key={category} className="category-images">
                            { products && displayProducts(category) }
                        </div>
                        <div>
                            <Link to={`/products/${category.toLowerCase()}`} >
                                See more
                            </Link>
                        </div>
                   </div>
                ))}
            </div>
        </>
    )
}

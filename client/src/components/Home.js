import { useEffect, useState } from "react"
import apiUrl from "../axios"
import Categories from "./categories/Categories"
import NavBar from "./Navbar/Navbar"
import "./home.css"

export default function Home() {
    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const doRequest = async () => {
            try {
                const response = await apiUrl.get(`/products/${selectedCategory}`);
                setCategories(response.data.categories);
                setProducts(response.data.products);
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        }

        doRequest();
    }, []);

    return (
        <>
            {/* <Navbar 
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            /> */}
            <Categories
                products={products}
                categories={categories}
            />
        </>
    )
}

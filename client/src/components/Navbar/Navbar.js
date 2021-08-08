import React from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs'
import { useHistory } from 'react-router';
import './navbar.css'

export default function Navbar({ categories, selectedCategory, setSelectedCategory }) {
    const history = useHistory();

    const handleChange = () => {
        if (selectedCategory === 'all') {
            return history.push('/categories')
        }

        history.push(`/products/${selectedCategory}`);
    }


    return (
        <div className="navbar-container" >
            <div className="fa-bar" >
                <FaBars size= '25px' />
                <AiFillHome size='25px' />
            </div>
            <div className="search-input" >
                <select onChange={(e) => setSelectedCategory(e.target.value)} >
                    { categories && categories.map((category) => (
                        <option key={category} value={category} >{category}</option>
                    )) }
                </select>
                <input type="text" />
                <BsSearch className="fa-search" size= '30px' onClick={handleChange} />
            </div>
            <div className="cart" >
                <AiOutlineShoppingCart className="ai-cart" size="30px" />
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import ProductCss from './Products.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Products() {
    const [items, setItems] = useState([]);
    const [sortBy, setSortBy] = useState(null); // State for sorting selection

    useEffect(() => {
        fetch('/product/items')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                console.log('Fetched items:', data);
            })
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    // Function to handle sorting selection change
    const handleSortChange = (option) => {
        switch (option) {
            case 'lowToHigh':
                setItems([...items].sort((a, b) => a.product_price - b.product_price));
                break;
            case 'highToLow':
                setItems([...items].sort((a, b) => b.product_price - a.product_price));
                break;
            case 'AZ':
                setItems([...items].sort((a, b) => a.product_name.localeCompare(b.product_name)));
                break;
            default:
                setItems([...items]); // Default to original order if no valid option
                break;
        }
    };
    const sortItems = (option) =>{
         if(option === 'lowToHigh'){
            setItems([...items].sort((a, b) => a.product_price - b.product_price));
         } else if(option === 'highToLow'){
            setItems([...items].sort((a, b) => b.product_price - a.product_price));
         }  else if(option === 'AZ'){
            setItems([...items].sort((a, b) => a.product_name.localeCompare(b.product_name)));
         } else{
            setItems([...items]);
         }
    }



    return (
        <>
            <div className={ProductCss.filterContainer}>
                <Dropdown className={ProductCss.Dropdown}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter Products
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleSortChange('lowToHigh')}>Low to High</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSortChange('highToLow')}>High to Low</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSortChange('AZ')}>A-Z</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <button>Daily</button>
                <button>Track</button>
                <button>Drag</button>
            </div>

            <div className={ProductCss.productContainer}>
                {items.map((item, i) => (
                    <div key={i}>
                        <div className={ProductCss.productContent}>
                            <h5>{item.product_name}</h5>
                            <div className={ProductCss.imgContainer}>
                                <img src={item.product_image} alt={item.product_name} className={ProductCss.productImage} />
                            </div>
                            <div className={ProductCss.textContainer}>
                                <p>{item.product_description}</p>
                            </div>
                            <p>Price: {item.product_price} $USD</p>
                            <div className={ProductCss.btnContainer}>
                                <button className={ProductCss.addBtn}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;
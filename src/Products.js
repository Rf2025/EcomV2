import React, { useState, useEffect } from 'react';
import ProductCss from './Products.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Products() {
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        fetch('/product/items')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                console.log('Fetched items:', data);
            })
            .catch(error => console.error('Error fetching items:', error));
    }, []);


    // this function is used to sort the products, it takes a parameter of option,low to high, high to low, and A-Z
    const sortItems = (option) =>{
         if(option === 'lowToHigh'){
            setItems([...items].sort((a, b) => a.product_price - b.product_price));
         } else if(option === 'highToLow'){
            setItems([...items].sort((a, b) => b.product_price - a.product_price));
         }  else if(option === 'AZ'){
          // localeCompare() is used to sort the product names in alphabetical order
            setItems([...items].sort((a, b) => a.product_name.localeCompare(b.product_name)));
         } else{
            setItems([...items]);
         }
    }


// function to sort items based of build type


const sortBuildType = (type) => {
  let sortedItems = [];

  if (type === 'daily') {
      sortedItems = items.filter(item => item.setup_type === 'daily');
  } else if (type === 'track') {
      sortedItems = items.filter(item => item.setup_type === 'track');
  } else if (type === 'drag') {
      sortedItems = items.filter(item => item.setup_type === 'drag');
  } else {
      sortedItems = [...items]; 
  }


  setItems(sortedItems);
};







    return (
        <>
            <div className={ProductCss.filterContainer}>
                <Dropdown className={ProductCss.Dropdown}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter Products
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => sortItems('lowToHigh')}>Low to High</Dropdown.Item>
                        <Dropdown.Item onClick={() => sortItems('highToLow')}>High to Low</Dropdown.Item>
                        <Dropdown.Item onClick={() => sortItems('AZ')}>A-Z</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                   <button className={ProductCss.buildBtn} onClick={()=> sortBuildType('daily')}>Daily</button>
                    <button  className={ProductCss.buildBtn} onClick={()=> sortBuildType('track')}>Track</button>            
                     <button  className={ProductCss.buildBtn} onClick={()=> sortBuildType('drag')}>Drag</button>
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







































import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
// import { Link } from 'react-router-dom';
// import WishList from './components/WishList';

const App = () => {
  const [category, setCategory] = useState([]);
  const [wishList, setWishList] = useState([]);
  // console.log(category);
  const img = document.querySelector('img');
  return (
    <div className='App'>
      <label for='menu'>Select your Category: </label>
      <select
        id='menu'
        onChange={() => {
          //   console.log(menu.value);
          fetch(`http://localhost:3000/category/${menu.value}`)
            .then((rawData) =>
              rawData.json().then((productDocs) => {
                setCategory(productDocs);
              })
            )
            .catch((err) => console.error('Error:', err));
        }}
      >
        <option value='Laptops'>Laptops</option>
        <option value='Phones'>Phones</option>
        <option value='Headphones'>Headphones</option>
        <option value='Digital Cameras'>Digital Cameras</option>
        <option value='Refrigerators'>Refrigerators</option>
        <option value='TVs'>TVs</option>
      </select>

      {/* <Link to='/wishlist'>
        <button
          className='wishlistButton'
          // onClick={() => {
          //   fetch(`http://localhost:3000/wishlist`)
          //     .then((rawData) =>
          //       rawData.json().then((wishListDocs) => {
          //         // setCategory(productDocs);
          //         console.log('l123123123dfgsook', wishListDocs);
          //         setWishList(wishListDocs);
          //       })
          //     )
          //     .catch((err) => console.error('Error:', err));
          // }}
        >
          <strong>Your Wishlist</strong>
        </button>
      </Link> */}

      <button
        className='wishlistButton'
        onClick={() => {
          fetch(`http://localhost:3000/wishlist`)
            .then((rawData) =>
              rawData.json().then((wishListDocs) => {
                // setCategory(productDocs);
                console.log('l123123123dfgsook', wishListDocs);
                setWishList(wishListDocs);
              })
            )
            .catch((err) => console.error('Error:', err));
        }}
      >
        <strong>Your Wishlist</strong>
      </button>

      <div className='ProductCard'>
        <ProductCard category={category} />
      </div>
    </div>
  );
};

export default App;

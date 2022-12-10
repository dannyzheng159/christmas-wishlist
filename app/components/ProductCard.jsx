import * as ReactDOMClient from 'react-dom/client';
import React, { useState, useEffect } from 'react';

const ProductCard = (props) => {
  // console.log('props object:', props);
  // console.log('category property:', props.category);
  return (
    <div>
      {props.category.map((product, key = 0) => (
        <div className='productBox' id={key++}>
          <h2 className='productName'>
            <strong>{product.name ? product.name : null}</strong>
          </h2>

          <p className='productCondition'>
            <strong>
              Condition: {product.condition ? product.condition : null}
            </strong>
          </p>

          <p className='productRegPrice'>
            <strong>
              Regular Price: $
              {product.regularPrice ? product.regularPrice : null}
            </strong>
          </p>

          <p className='productSalePrice'>
            <strong>
              Sale Price: ${product.salePrice ? product.salePrice : null}
            </strong>
          </p>

          <img
            className='productImages'
            src={product.image ? product.image : null}
          ></img>

          <a className='productURL' href={product.url} target='_blank'>
            <strong>Buy Now!</strong>
          </a>

          <button
            className='addToWishListButton'
            onClick={() => {
              fetch(`http://localhost:3000/wishlist/addItem`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: product.name }),
              })
                .then((rawData) =>
                  rawData.json().then((productDocs) => {
                    // setCategory(productDocs);
                    // console.log(productDocs);
                  })
                )
                .catch((err) => console.error('Error:', err));
            }}
          >
            Add to wishlist
          </button>
        </div>
      ))}
    </div>
  );
};
export default ProductCard;

import React from 'react';
import ProductItem from './ProductItem';
import "../App.css"
import Loader from './Loader';

const ProductList = ({product}) => {
console.log(product);

  return (
    <div>
      <h1 className='title'>Pruduct list</h1>
      <div className="box">
          {product.length > 0 ? (
          product.map((item) => <ProductItem {...item} />) 
          ) : (
            <Loader/>
          )}
      </div>
    </div>
  );
};

export default ProductList;

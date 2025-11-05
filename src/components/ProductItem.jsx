import React from 'react';
import "../App.css"

const ProductItem = ({title, price, category, description, images}) => {
  return (
      <div className="conteiner">
        <h1>{title}</h1>
        <p>Price : {price}</p>
        <p>description : {description}</p>
        <p>category : {category}</p>

        <img src={images[0]} alt="" />
      </div>
  );
};

export default ProductItem; 

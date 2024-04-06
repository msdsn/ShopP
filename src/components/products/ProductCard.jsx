import React from "react";

const ProductCard = (product) => {
  const { title, image, price } = product;
  return (
    <>
      <div className="card">
        <div className="price">
          <h2>{price}</h2>
        </div>
        <img src={image} alt="" />
        <div className="card_over" >
          <h3>{title}</h3>
        </div>
        
        
      </div>
    </>
  );
};

export default ProductCard;

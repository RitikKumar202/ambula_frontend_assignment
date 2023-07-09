import React from "react";

const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="card">
          <div>
            <img src={productItem.image} alt="" className="product-img" />
          </div>
          <div>
            <h3 className="product-name">{productItem.name}</h3>
          </div>
          <div className="product-price">Rs.{productItem.price}</div>
          <div>
            <button
              className="add-product"
              onClick={() => handleAddProduct(productItem)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

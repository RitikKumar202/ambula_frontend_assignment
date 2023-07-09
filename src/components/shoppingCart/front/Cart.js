import React from "react";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
  //calculating the total prices of all the items in the cart
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-items">
      <div className="cart-header">Your Cart</div>
      {cartItems.length === 0 && (
        <div className="empty-cart">Your cart is empty!</div>
      )}

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <img className="cart-item-img" src={item.image} alt="" />
              <div className="cart-item-name">{item.name}</div>
            </div>
            <div className="cart-item-function">
              <button
                className="remove-item"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
              <span>{item.quantity} </span>
              <button
                className="add-item"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <div className="cart-item-price">Rs.{item.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* displaying total prices */}
      <div className="total-price">Total Price: Rs.{totalPrice}</div>
    </div>
  );
};

export default Cart;

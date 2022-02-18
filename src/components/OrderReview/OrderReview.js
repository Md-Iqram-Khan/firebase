import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProduct";
import { deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import CartItem from "../CartItem/CartItem";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();

  const handleRemove = (key) => {
    const newCart = cart.filter((prod) => prod.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };

  const handlePlaceOrder = () => {
    // setCart([]);
    // clearTheCart();
    navigate("/shipping");
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((prod) => (
          <CartItem key={prod.key} product={prod} handleRemove={handleRemove} />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="btn-regular">
            Proceed to Shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;

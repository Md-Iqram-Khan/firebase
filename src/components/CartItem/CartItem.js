import React from 'react';

const CartItem = (props) => {
  const{name,price,quantity,key}= props.product;
  const{handleRemove}= props;

  return (
    <div className='product'>
        <div>
        <h2 className='product-name'>{name}</h2>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <button className='btn-regular' onClick={()=>{handleRemove(key)}}>Remove</button>
        </div>
    </div>
  )
}

export default CartItem
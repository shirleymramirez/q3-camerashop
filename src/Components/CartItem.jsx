import React from 'react';
import '../index.css';

const CartItem = ({ cartItems, removeFromCart}) => {
    let totalPrice = 0;
    let tax = 0.086;
    let subTotal = 0;
    const cartItem = cartItems.map((item, i)=> {
        subTotal += item.price * item.inCart;
        totalPrice += subTotal + tax;
        return (
            <div key={i} className="itemsInCart">
                <p>{item.name}</p>
                <i class="fas fa-trash-alt" onClick={() => removeFromCart(item.id)}></i>
            </div>
        )
    })
    return (
        <div className="shoppingCart">
            <h2 style={{ textAlign: "center", marginTop: '1em' }}>Shopping Cart</h2>
            <div className="table table-hover">
                {cartItem}
                <p>Subtotal: ${subTotal.toFixed(2)}</p>
                <p>Tax: ${(totalPrice * tax).toFixed(2)}</p>
                <p>Total: ${(subTotal + (totalPrice * tax)).toFixed(2)}</p>
                <button className="checkOutButton">CHECKOUT</button>
            </div>
        </div>
    )
        
}

export default CartItem;
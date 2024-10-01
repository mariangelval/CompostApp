import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

function Cart() {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;

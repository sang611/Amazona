import React, {useEffect, useState, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    useLocation, useParams
} from "react-router-dom";
import {Link} from 'react-router-dom'
import {addToCart, removeItem} from "../../actions/cartAction";
import './cart.component.css'
import {bindReporter} from "web-vitals/dist/lib/bindReporter";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function CartComponent(props) {
    const dispatch = useDispatch();
    const query = useQuery();
    const {productId} = useParams();
    const qty = parseInt(query.get("qty"));

    const {cartItems} = useSelector(state => state.cart)

    useEffect(() => {
        console.log("Quantity", qty)
        dispatch(addToCart(productId, qty));
    }, [])

    function numOfProducts() {
        return cartItems.reduce((a, c) => a+c.qty, 0)
    }

    function totalPrice() {
       const total = cartItems.reduce((a, c) => a + c.qty*parseFloat(c.price.slice(1)), 0);
       return total.toFixed(2);
    }

    function removeItemFromCart(productId) {
        dispatch(removeItem(productId))
    }

    return (
        <div className="cart">
            <div className="cart-list">
                <ul>
                    <li className="cart-header">
                        <h2>Products</h2>
                        <h3>Price</h3>
                    </li>
                    <hr/>
                    {
                        cartItems.length > 0 ?
                        cartItems.map((item) => (
                            <li key={item.id}>
                                <div className="cart-item">
                                    <img src={item.image} alt="No img" className="item-img"/>
                                    <div className="item-action">
                                        <Link to={`/products/${item.id}`}><h4 className="item-name">{item.name}</h4></Link>
                                        <div>
                                            <label htmlFor="product-qty">Quantity: </label>
                                            <input
                                                type="number"
                                                id="product-qty"
                                                min="1"
                                                max="100"
                                                value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.id, e.target.value))}
                                            />&nbsp;
                                            <button onClick={()=>removeItemFromCart(item.id)}>Delete</button>
                                        </div>
                                    </div>
                                    <h3 className="item-price">{item.price}</h3>
                                </div>
                                <hr/>
                            </li>
                        )) : (
                            <center>
                                <br/>
                                <h2>Cart is empty</h2>
                            </center>
                            )
                    }
                </ul>
            </div>
            <div className="cart-action">
                {
                    cartItems.length > 0 ? (<h3>
                            Subtotal ({numOfProducts()} items): ${totalPrice()}
                    </h3>) :
                        <h2>Subtotal (0 items): $0</h2>
                }
                 <br/>
                <button className="add-to-cart-btn" disabled={cartItems.length === 0} onClick={() => {props.history.push("/signin?redirect=shipping")}}>Proceed to checkout</button>
            </div>
        </div>
    );
}

export default CartComponent;
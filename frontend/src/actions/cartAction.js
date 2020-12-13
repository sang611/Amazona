import axios from "axios";
import {ADD_PRODUCT_TO_CART, REMOVE_ITEM_FROM_CART} from "../constants/productConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
    const {data} = await axios.get("http://localhost:5000/api/products/" + productId);
    console.log(data);
    console.log("Qty action", qty)
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: {
            id: data.id,
            name: data.name,
            price: data.price,
            brand: data.brand,
            image: data.image,
            quantityInStock: data.quantityInStock,
            qty
        }
    })

    console.log(getState())
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems) );

}

const removeItem = (productId) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_ITEM_FROM_CART,
        payload: productId
    })

    console.log(getState())
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems) );

}

export {addToCart, removeItem}
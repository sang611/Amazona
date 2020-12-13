import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import productListReducer from "./reducer/productListReducer";
import thunk from 'redux-thunk'
import productDetailReducer from "./reducer/productDetailReducer";
import {cartReducer} from "./reducer/cartReducer";

const cartItems = JSON.parse(localStorage.getItem("cartItems"))

const initialState = {
   cart: {cartItems}
};

console.log(initialState)

const reducer = combineReducers(
    {
        productList: productListReducer,
        productDetail: productDetailReducer,
        cart: cartReducer,
    }
)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
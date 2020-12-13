import {ADD_PRODUCT_TO_CART, REMOVE_ITEM_FROM_CART} from "../constants/productConstants";

export const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            const item = action.payload;
            const product = state.cartItems.find((x) => x.id === item.id)

            if (product) {
                return {
                    cartItems: state.cartItems.map((x) =>
                        (x.id === product.id ? item : x)
                    )
                }

            } else {
                return {
                    cartItems: [...state.cartItems, item]
                }
            }
        case REMOVE_ITEM_FROM_CART:
            const index = state.cartItems.findIndex((x) => x.id === action.payload)
            console.log(index)
            return {
                cartItems: state.cartItems.filter((x) => x.id !== action.payload)
            }
        default: return state;
    }
}

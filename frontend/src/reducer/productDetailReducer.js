import {PRODUCT_GET_BY_ID_FAIL, PRODUCT_GET_BY_ID_REQUEST, PRODUCT_GET_BY_ID_SUCCESS} from "../constants/productConstants";

export default function (state={loading: true}, action) {
    switch (action.type) {
        case PRODUCT_GET_BY_ID_REQUEST:
            return {loading: true}
        case PRODUCT_GET_BY_ID_SUCCESS:
            return {loading: false, product: action.payload}
        case PRODUCT_GET_BY_ID_FAIL:
            return {loading: false, error: action.payload}
        default: return state;
    }
}
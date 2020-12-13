import {
    PRODUCT_GET_BY_ID_FAIL,
    PRODUCT_GET_BY_ID_REQUEST,
    PRODUCT_GET_BY_ID_SUCCESS
} from "../constants/productConstants";
import axios from "axios";

const getProductById = (id) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_GET_BY_ID_REQUEST})
        const {data} = await axios.get(`http://localhost:5000/api/products/${id}`)

        dispatch({type: PRODUCT_GET_BY_ID_SUCCESS, payload: data})
    }
    catch (e) {
        dispatch({type: PRODUCT_GET_BY_ID_FAIL, payload: e.message})
    }
}

export {getProductById}
import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "../constants/productConstants";
import axios from "axios";

const listProducts = async (dispatch) => {
    try{
        dispatch({type: PRODUCT_LIST_REQUEST});

        const {data} = await axios.get("http://localhost:5000/api/products");

        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    }
    catch (e) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: e.message})
    }
}

export {listProducts}
import React, {useState, useEffect} from 'react';
import {Link, useParams, withRouter} from 'react-router-dom'
import './product_detail.component.css'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getProductById} from "../../actions/productDetailAction";
import {useRef} from "react";


function ProductDetailComponent(props) {
    const {id} = useParams();
    const [qty, setQty] = useState(1);

    const productDetail = useSelector((state) => state.productDetail)
    console.log(productDetail)
    const {product, loading, error} = productDetail;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProductById(id));
    }, [])

    return (

        <div className="product-detail-wrapper">
            <a href="#" className="back-button" onClick={() => props.history.goBack()}>Back to list</a>
            {
                loading ? <center><h1>Loading ...</h1></center> :
                    error ? <h2>{error}</h2> :
                        <div className="product-detail-container">
                            <img src={product.image} alt="No img"/>
                            <div className="product-information">
                                <h3 className="name-detail">{product.name}</h3>
                                <p className="rating-detail">{product.rating} Stars</p>
                                <p className="price-detail">Price: {product.price}</p>
                                <p className="description-detail">Description: Nice shirt</p>
                            </div>
                            <div className="product-add-pane">
                                <p className="price-detail">Price: {product.price}</p>
                                <p className="product-state">State: InStock</p>
                                <div>
                                    <label htmlFor="product-qty">Quantity: </label>
                                    <input
                                        type="number"
                                        id="product-qty"
                                        min="1"
                                        max="100"
                                        value={qty}
                                        onChange={(event) => {setQty(event.target.value)}}
                                    />
                                </div>
                                <br/>
                                <Link to={`/cart/${id}?qty=${qty}`}>
                                    <button className="add-to-cart-btn">Add to cart</button>
                                </Link>
                            </div>
                        </div>
            }
        </div>

    );
}

export default withRouter(ProductDetailComponent);
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../../actions/productListAction";

function HomeComponent(props) {
    const products = useSelector(state => state.productList)
    const {productList, loading, error} = products;
    console.log(products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts);
    }, [])

    return (
        loading ? <center><h1>Loading ...</h1></center> :
            error ? <h2>{error}</h2> :
                <ul className="products">
                    {
                        productList.map((product, index) => {
                            return (
                                <li key={product.id}>
                                    <div className="single-product">
                                        <Link to={`products/${product.id}`}>
                                            <img className="product-img" src={product.image} alt="No img"/>
                                        </Link>
                                        <div className="product-name">
                                            <Link to={`products/${product.id}`}>{product.name}</Link>
                                        </div>
                                        <div className="product-brand">
                                            {product.brand}
                                        </div>
                                        <div className="product-price">
                                            {product.price}
                                        </div>
                                        <div className="product-rating">
                                            {product.rating} stars
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>

    );
}

export default HomeComponent;
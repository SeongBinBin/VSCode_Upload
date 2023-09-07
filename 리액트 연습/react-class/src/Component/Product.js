import React from "react";

function Product({ name, price, cover, description}){
    return(
        <div className="product">
            <div className="product-img"><img src={cover} alt={name}></img></div>
            <div className="product-name">{name} (${price})</div>
            <div className="product-description">{description}</div>
        </div>
    )
}
export default Product
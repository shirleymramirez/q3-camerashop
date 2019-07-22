import React from 'react';

const Camera = ({ id, name, price, picture, rating, inCart, onSale, addToCart }) => {
    const clickHandler = () => {
        addToCart(id);
    }
    return (
        <div className="card-body cameraContainer">
            <div>
                <h1 className="card-title">{name}</h1>
                <img src={picture} alt={name} style={{ height: '20em', width: '20em'}}></img>
                <h4>${price}</h4>
                <p style={{color:'red'}}>{onSale === true ? 'On SALE!' : '' }</p>
                <p>Rating: {rating}</p>
                {/* for star icon */}
            </div>
            <div className="addToCartButton">
                <button onClick={clickHandler} value={id}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Camera;
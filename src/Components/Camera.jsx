import React from 'react';
import ReactStars from 'react-stars'

const Camera = ({ id, name, price, picture, rating, inCart, onSale, addToCart }) => {
    const clickHandler = () => {
        addToCart(id);
    }
    return (
        <div className="card-body cameraContainer">
            <div>
                <h2 className="card-title">Camera Name: {name}</h2>
                <img src={picture} alt={"picture of " + name} style={{ height: '20em', width: '20em'}}></img>
                <h4>${price}</h4>
                <p style={{color:'red'}}>{onSale === true ? 'On SALE!' : '' }</p>
                <p>Rating: <ReactStars count={5} value={rating} edit={false} /></p>
            </div>
            <div className="addToCartButton">
                <button onClick={clickHandler} value={id}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Camera;
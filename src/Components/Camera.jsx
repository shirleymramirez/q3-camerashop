import React from 'react';
import ReactStars from 'react-stars'

const Camera = ({ id, name, price, picture, rating, onSale, addToCart }) => {
    const clickHandler = () => {
        addToCart(id);
    }
    return (
        <div className="cameraContainer">
            <div>
                <h4 style={{ color: 'rgb(3, 94, 68)'}}>Camera Name: {name}</h4>
                <img src={picture} alt={"picture of " + name} style={{ width: '20em'}}></img>
                <h5>${price}</h5>
                <p style={{color:'red'}}>{onSale ? 'On SALE!' : '' }</p>
                <div className="starRating"> 
                    <p> Rating: </p>  
                    <ReactStars count={5} value={rating} edit={false} />
                </div>
            </div>
            <div className="addToCartButton">
                <button onClick={clickHandler} value={id} className="cameraButton">ADD TO CART</button>
            </div>
        </div>
    )
}

export default Camera;
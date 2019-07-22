import React from 'react';
import SearchBar from "./SearchBar";
import Camera from './Camera';
import '../index.css'

const CameraList = ({ cameras, addToCart, itemsSearch }) => {
    return (
        <div>
            <div>
                <SearchBar onItemsSearch={itemsSearch} />
            </div>
            <div>
                <h2>Camera List</h2>
                <div className="cameraShelf">
                    {cameras.map(camera=> {
                        return (
                            <Camera 
                                key={camera.id}
                                {...camera}
                                addToCart={addToCart}
                            />
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default CameraList;
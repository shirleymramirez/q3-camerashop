import React from "react";
import CameraList from './CameraList';
import CartItem from './CartItem';
import '../index.css';

class CustomerView extends React.Component {
    state = {
        cameras: [],
        search: ""
    }

    componentDidMount() {
        this.getAllCameras();
    }


    getAllCameras = async () => {
        const response = await fetch('http://localhost:8000/cameras');
        const json = await response.json();
        this.setState({
            cameras: json.map(camera => {
                return {
                    ...camera,
                    inCart: 0
                }
            })
        })
    }

    addToCart = async (id) => {
        const response = await fetch(`http://localhost:8000/cameras/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                inCart: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok) {
            throw new Error();
        } else {
            this.setState(prevState => {
                return {
                    cameras: prevState.cameras.map(camera=> {
                        return {
                            ...camera,
                            inCart: camera.id === id ? camera.inCart + 1 : camera.inCart
                        }
                    })
                }
            })
        }
    }

    removeFromCart = async (id) => {
        const response = await fetch(`http://localhost:8000/cameras/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                inCart: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error();
        } else {
            this.setState({
                cameras: this.state.cameras.map(camera=> {
                    return {
                        ...camera,
                        inCart: camera.id === id ? camera.inCart = 0: camera.inCart
                    }
                })
            })
        }
    }

    searchList = str => {
        this.setState({
            ...this.state,
            search: str
        })
    }

    render(){
        const cartItems = this.state.cameras.filter(item => {
            return item.inCart > 0
        })

        let searchedItem;
        const searchItem = str => {
            searchedItem = this.state.cameras.filter(camera => {
                return camera.name.toLowerCase().includes(str.toLowerCase());
            });
        }

        searchItem(this.state.search);
        
        return(
            <div className="cameraList">
                <CameraList 
                    itemsSearch={this.searchList}
                    cameras={searchedItem}
                    addToCart={this.addToCart}
                />
                <CartItem 
                    cartItems={cartItems}
                    removeFromCart={this.removeFromCart}
                />
            </div>
        )
    }
}

export default CustomerView;
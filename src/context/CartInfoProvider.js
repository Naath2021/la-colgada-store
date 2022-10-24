import { useState } from "react";
import { CartContext } from "./CartContext";

const CartInfoProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, qty, productTotalPrice) => {
        if (alreadyInCart(product.id)) {
            alert("ya lo agregaste.")
        } else {
            setCart([...cart, { product, qty, productTotalPrice }])
            // console.log("cart: ", [...cart, { product, qty, productTotalPrice }])
        }
    }

    const baseUrl = "/img/"

    const clearCart = () => setCart([]);

    const deleteProduct = (item) => {
        let index = cart.indexOf(item)
        let itemToDelete = cart.splice(index, 1)
        let newCart = cart.filter(item => item !== itemToDelete)
        setCart(newCart)
    }

    const alreadyInCart = function (id) {
        return cart.some((cartItem) => {
            return id === cartItem.product.id
        })
    }


    const getTotalCartPrice = () => {
        return cart.reduce((acc, item) => acc += item.product.price * item.qty, 0)
    }

    const totalItemsInCart = () => {
        return cart.reduce((total, item) => total + item.qty, 0)
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, deleteProduct, clearCart, getTotalCartPrice, baseUrl, totalItemsInCart }}>
            {children}
        </CartContext.Provider >
    )
}



export default CartInfoProvider
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);


    function removeProduct(product){
        setCartItems((prevItems)  => {
            return prevItems.filter((item) => (item.id !== product.id))
        })
    }

    function addToCart(item) {
        setCartItems((prevItem) => {
            const exists = prevItem.find((cartItem) => cartItem.id === item.id);

            if (exists) {
                return prevItem.map((CartItem) =>
                    CartItem.id === item.id
                        ? { ...CartItem, quantity: CartItem.quantity + 1 } : CartItem
                )
            } else {
                return [...prevItem, { ...item, quantity: 1 }]
            }
        })
    }

    return <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeProduct }}>
        {children}
    </ CartContext.Provider >
}

export const useCart = () => (useContext(CartContext));
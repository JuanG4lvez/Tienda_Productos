import { useState, useEffect, useMemo } from 'react'
import type { CartItem, Product, ProductID } from '../types/types.ts'

export const useCart = () => {
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
      }
    
    //const [data] = useState(db)
    const [data, setData] = useState <Product[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      fetch("https://tienda-opal.vercel.app/products")
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
        .catch((error) =>{
          setError(error)
          setLoading(false)
        })
    }, [])

    const [cart, setCart] = useState(initialCart)
    
      //almacenar en el localStorage para persistencia
    useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart])
    
    function addToCart(item : Product){
        const itemExist = cart.findIndex(product => product.id === item.id);
        if(itemExist >= 0)
        {
          const updatedCart = [...cart]
          updatedCart[itemExist].quantity++
          setCart(updatedCart)
        }
        else
        {
          const newItem : CartItem = {...item, quantity : 1}
          setCart([...cart, newItem]);
        }
    }
    
    function removeFromCart(id : ProductID){
        setCart(prevCart => prevCart.filter(product => product.id !== id))
    }
    
    function increaseQuantity(id : ProductID){
        const updatedCart = cart.map(item => {
          if(item.id === id && item.quantity < 10){
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })
        setCart(updatedCart)
    }
    
    function decreaseQuantity(id : ProductID){
        const updatedCart = cart.map(item => {
          if(item.id === id && item.quantity > 1){
            return {
              ...item,
              quantity: item.quantity - 1
            }
          }
          return item
        })
        setCart(updatedCart)
    }
    
    function clearCart(){
        setCart([])
    }

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.price * item.quantity), 0), [cart])

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
    
}


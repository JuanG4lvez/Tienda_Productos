import { useState, useEffect, useMemo } from 'react'
import { db } from '../data/db.ts'
import type { CartItem, Product, GuitarID } from '../types/types.ts'

export const useCart = () => {
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
      }
    
    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)
    
      //almacenar en el localStorage para persistencia
    useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart])
    
    function addToCart(item : Product){
        const itemExist = cart.findIndex(guitar => guitar.id === item.id);
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
    
    function removeFromCart(id : GuitarID){
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }
    
    function increaseQuantity(id : GuitarID){
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
    
    function decreaseQuantity(id : GuitarID){
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


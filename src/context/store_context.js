import React, { useContext, useEffect, useReducer } from 'react';
import items from '../data/productData'
import cartReducer from '../reducer/reducer';
const StoreContext = React.createContext();

const getLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}

function StoreProvider({ children }) {
    const initialState = {
        isSidebarOpen: false,
        cart: getLocalStorage(),
        total_items: 0,
        sub_total: 0,
        shipping: 0,
        products: items,
        message_text: '',
        message_type: '',
        search: ''
    }


    const [state, dispatch] = useReducer(cartReducer, initialState)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
        dispatch({ type: 'CALC_VALUES' })
    }, [state.cart])

    useEffect(() => {
        const timeOut = setTimeout(() => dispatch({ type: 'UPDATE_MESSAGE' }), 3000)
        return () => clearInterval(timeOut)
    }, [state.message_text])

    const openSidebar = () => {
        dispatch({ type: 'OPEN_SIDEBAR' })
    }
    const closeSidebar = () => {
        dispatch({ type: 'CLOSE_SIDEBAR' })
    }

    const addToCart = (id, number, specificProduct) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, number, specificProduct } })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    const removeCartItem = (id) => {
        dispatch({ type: 'REMOVE_CART_ITEM', payload: id })
    }
    const increament = (id) => {
        dispatch({ type: 'INCREAMENT', payload: id })
    }
    const decreament = (id) => {
        dispatch({ type: 'DECREAMENT', payload: id })
    }
    const handleChange = (e) => {
        dispatch({ type: 'SEARCH', payload: e })
    }
    const handleSubmit = (e, products, search) => {
        e.preventDefault()
        dispatch({ type: 'SEARCH_PRODUCTS', payload: { products, search } })
    }

    return <StoreContext.Provider
        value={
            {
                ...state,
                addToCart,
                clearCart,
                openSidebar,
                closeSidebar,
                removeCartItem,
                increament,
                decreament,
                handleChange,
                handleSubmit,
            }
        }
    >
        {children}
    </StoreContext.Provider>
}

const useGlobalContext = () => {
    return useContext(StoreContext)
}
export { StoreProvider, useGlobalContext };
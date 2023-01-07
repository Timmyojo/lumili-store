const cartReducer = (state, action) => {
    if (action.type === 'OPEN_SIDEBAR') {
        return { ...state, isSidebarOpen: true }
    }

    if (action.type === 'CLOSE_SIDEBAR') {
        return { ...state, isSidebarOpen: false }
    }

    if (action.type === 'ADD_TO_CART') {
        const { id, number, specificProduct } = action.payload
        const newCart = state.cart.find(product => product.id === id)
        if (newCart) {
            const cartNew = state.cart.map(item => {
                if (item.id === id) {
                    const newNum = item.number + number
                    return { ...item, number: newNum }
                } else {
                    return item;
                }
            })
            return { ...state, cart: cartNew, message_text: 'Item added to cart successfully...', message_type: 'add' }
        } else {
            const newItem = {
                id,
                name: specificProduct.name,
                icon: specificProduct.icon,
                number,
                price: specificProduct.price
            }
            return { ...state, cart: [...state.cart, newItem], message_text: 'Item added to cart successfully...', message_type: 'add' }
        }
    }
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }
    if (action.type === 'REMOVE_CART_ITEM') {
        const newItems = state.cart.filter(item => item.id !== action.payload)
        return { ...state, cart: newItems, message_text: 'Item deleted from cart successfully...', message_type: 'delete' }
    }
    if (action.type === 'CALC_VALUES') {
        const subTotal = state.cart.reduce((total, item) => {
            return total + (item.price * item.number)
        }, 0)

        const totalCart = state.cart.reduce((total, item) => {
            return total + item.number
        }, 0)
        return { ...state, sub_total: subTotal, total_items: totalCart }
    }
    if (action.type === 'INCREAMENT') {
        const increase = state.cart.map(item => {
            if (item.id === action.payload) {
                const newNum = item.number + 1
                return { ...item, number: newNum }
            } else {
                return item
            }
        })
        return { ...state, cart: increase }
    }
    if (action.type === 'DECREAMENT') {
        const decrease = state.cart.map(item => {
            if (item.id === action.payload) {
                const newNum = item.number - 1
                if (newNum < 1) {
                    item.number = 1
                }
                return { ...item, number: newNum }
            } else {
                return item
            }
        })
        return { ...state, cart: decrease }
    }
    if (action.type === 'SEARCH_PRODUCTS') {
        const { products, value } = action.payload
        const filtered = products.filter(item => {
            return value === '' ? item : item.name.includes(value)
        })
        return { ...state, searchedProducts: filtered }
    }
    if (action.type === 'UPDATE_MESSAGE') {

        return { ...state, message_text: '' }
    }
    throw new Error(`Action type ${action.type} does not exist`)
}

export default cartReducer;
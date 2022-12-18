import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import formatPrice from '../utils/formatPrice'
import CartHeader from './CartHeader';
import CartSummary from './CartSummary';
import Amount from './Amount'
import { useGlobalContext } from '../context/store_context'

function Cart() {
    const { cart, clearCart, removeCartItem, message_text, message_type, increament, decreament } = useGlobalContext()
    if (cart.length < 1) {
        return (
            <div className='container'>
                <div className="cart-message">
                    <h3 className={`${message_type}`}>{message_text}</h3>
                </div>
                <div className="empty">
                    <h1>Cart is Empty</h1>
                    <Link to='/products' className='btn'>shop now</Link>
                </div>
            </div>
        );
    }
    return (
        <div className='container'>
            <div className="cart-message">
                <h3 className={`${message_type}`}>{message_text}</h3>
            </div>
            <h1>my carts</h1>
            <div className="cart-content flex">
                <div className="header-content">
                    <CartHeader />
                    <div className="content">
                        {cart.map(item => {
                            const { id, name, number, icon, price } = item
                            return (
                                <div className='product-cart flex' key={id}>
                                    <div className="product-info flex">
                                        <img src={icon} alt={name} />
                                        <p>{name}</p>
                                    </div>
                                    <div className="quantity">
                                        <Amount id={id} number={number} increase={increament} decrease={decreament} />
                                    </div>
                                    <div className="total">
                                        {formatPrice(price * number)}
                                    </div>
                                    <div className="trash">
                                        <FaTrash onClick={() => removeCartItem(id)} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex' style={{ justifyContent: 'space-around' }}>
                        <Link to='/products' className='btn'>continue shopping</Link>
                        <button className='btn' onClick={clearCart}>clear cart</button>
                    </div>
                </div>
                <CartSummary />
            </div>
        </div>
    );
}

export default Cart;
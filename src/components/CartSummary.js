import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/store_context';
import formatPrice from '../utils/formatPrice';

function CartSummary() {
    const { shipping, sub_total } = useGlobalContext()
    return (
        <div className="cart-summary">
            <h3>order summary</h3>
            <hr />
            <div className="cart-expense">
                <div className="sub-total">
                    <span>cart subtotal</span> <span>{formatPrice(sub_total)}</span>
                </div>
                <div className="shipping">
                    <span>shipping fee</span> <span>{formatPrice(shipping)}</span>
                </div>
                <hr />
                <div className="total">
                    <span>total</span> <span>{formatPrice(sub_total + shipping)}</span>
                </div>

            </div>
            <Link to='' className='btn'>proceed to checkout</Link>

        </div>
    );
}

export default CartSummary;
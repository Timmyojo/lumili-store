import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../context/store_context';
import formatPrice from '../utils/formatPrice';
import Amount from './Amount'
import Star from './Stars';

function SingleProduct() {
    const { products, addToCart } = useGlobalContext()
    const [number, setNumber] = useState(1)

    const increase = () => {
        setNumber(prev => prev + 1)
    }

    const decrease = () => {
        setNumber(prev => {
            let amount = prev - 1
            if (amount < 1) {
                amount = 1
            }
            return amount
        })
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
        addToCart(specificProduct.id, number, specificProduct)
    }

    const { productId } = useParams()

    const specificProduct = products.find(product => product.id === Number(productId))

    return (
        <div className='container'>
            <div className="single-product flex">
                <div className="product-img flex">
                    <img src={specificProduct.icon} alt={specificProduct.name} />
                </div>
                <div className="info">
                    <div className="product-info">
                        <h2>{specificProduct.name}</h2>
                        <Star star={specificProduct.star} review={specificProduct.review} />
                        <p className='price'>{formatPrice(specificProduct.price)}</p>
                        <p>{specificProduct.desc}</p>
                        <p>Sold By: {specificProduct.brand}</p>
                    </div>
                    <hr />
                    <div className="cart-info">
                        <Amount number={number} increase={increase} decrease={decrease} />
                        <div className="cart-btn">
                            <Link to='/cart' className='add-cart' onClick={scrollToTop}>add to cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
import { useGlobalContext } from '../../context/store_context';
import formatPrice from '../../utils/formatPrice';
import { Link } from 'react-router-dom';
import Star from '../Stars';

function TrendingProducts() {
    const { products } = useGlobalContext()
    const trendingProducts = products.filter(product => product.trending === true)
    return (
        <div className='trending-products'>
            <div className="container">
                <div className="trending-content">
                    <h2>trending products</h2>
                    < div className='products' >
                        {
                            trendingProducts.map(product => {
                                const { id, name, icon, review, price, star } = product
                                return (
                                    <div key={id} className="product">
                                        <div className="image">
                                            <img src={icon} alt={name} />
                                        </div>
                                        <div className="info">
                                            <p className='name'><Link to={`products/${id}`}>{name}</Link></p>
                                            <p>{formatPrice(price)}</p>
                                            <Star star={star} review={review} />
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div >
                </div>
            </div>
        </div >
    );
}

export default TrendingProducts;

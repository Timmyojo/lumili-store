import { Link } from 'react-router-dom';
import formatPrice from '../utils/formatPrice'
import { useGlobalContext } from '../context/store_context';
import Search from './Search';
import Star from './Stars';

function Products() {
    const { products } = useGlobalContext()

    return (
        <div className="all-products">
            <div className='container'>
                <Search products={products} />
                < div className='products' >
                    {
                        products.map(product => {
                            const { id, name, icon, review, price, star } = product
                            return (
                                <div key={id} className="product">
                                    <div className="image">
                                        <img src={icon} alt={name} />
                                    </div>
                                    <div className="info">
                                        <p className='name'><Link to={`${id}`}>{name}</Link></p>
                                        <p className='price'>{formatPrice(price)}</p>
                                        <Star star={star} review={review} />
                                    </div>
                                </div>
                            )

                        })
                    }
                </div >
            </div>
        </div>
    );
}

export default Products;
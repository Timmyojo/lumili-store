import { Link } from 'react-router-dom';
import formatPrice from '../utils/formatPrice'
import { useGlobalContext } from '../context/store_context';
import Search from './Search';
import Star from './Stars';

function Products() {
    const { searchedProducts: items, products } = useGlobalContext()

    return (
        <div className="all-products">
            <div className='container'>
                <Search products={products} />
                {items.length < 1 ?
                    <h2>No product match your search...</h2> :
                    < div className='products' >
                        {
                            items.map(item => {
                                const { id, name, icon, review, price, star } = item
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
                    </div >}
            </div>
        </div>
    );
}

export default Products;
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/store_context';

function Search({ products }) {
    const [value, setValue] = useState('');
    const { searchProducts } = useGlobalContext();

    useEffect(() => {
        searchProducts(products, value.toLowerCase())
    }, [value, products, searchProducts]);

    return (
        <article>
            <form className='search-form'>
                <input
                    type="text"
                    placeholder='Search products...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </article>
    );
}

export default Search;
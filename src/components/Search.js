import { useGlobalContext } from '../context/store_context';
import { FaSearch } from 'react-icons/fa';

function Search({ products }) {
    const { search, handleChange, handleSubmit } = useGlobalContext()

    return (
        <article>
            <form>
                <input type="text" value={search} onChange={(e) => handleChange(e.target.value)} />
                <button type="submit" onClick={(e) => handleSubmit(e, products, search)}><FaSearch /></button>
            </form>
        </article>
    );
}

export default Search;
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context/store_context';
import data from '../data/NavData.js';
function Navbar() {
    const { openSidebar, total_items } = useGlobalContext()
    return (
        <nav className='nav-bar'>
            <div className="container flex">
                <div className="logo flex">
                    <Link to='/'>lumili</Link>
                    <div onClick={openSidebar} className="menu-icon">
                        <FaBars />
                    </div>
                </div>
                <ul className='flex'>
                    {data.map(item => {
                        const { id, url, name } = item
                        return (
                            <li key={id} className='nav-list'>
                                <Link to={url}>{name}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="cart flex">
                    <Link to='/cart'>cart</Link>
                    <p><FaShoppingCart /><span>{total_items}</span></p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
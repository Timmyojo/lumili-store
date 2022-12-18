import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import data from '../data/NavData.js';
import { useGlobalContext } from '../context/store_context'
function Sidebar() {
    const { isSidebarOpen, closeSidebar, total_items } = useGlobalContext()
    return (
        <nav className={`${isSidebarOpen ? 'side-bar show-sidebar' : 'side-bar'}`}>
            <div className="container">
                <div className="logo flex">
                    <Link to='/' onClick={closeSidebar}>lumili</Link>
                    <div onClick={closeSidebar} className="close-btn">
                        <FaTimes />
                    </div>
                </div>
                <ul>
                    {data.map(item => {
                        const { id, url, name } = item
                        return (
                            <li key={id} onClick={closeSidebar} className='nav-list'>
                                <Link to={url}>{name}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="cart flex">
                    <Link to='/cart' style={{ fontSize: '2rem', color: '#333' }} onClick={closeSidebar}>cart</Link>
                    <p><FaShoppingCart /><span>{total_items}</span></p>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
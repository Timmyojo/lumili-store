import { Link } from 'react-router-dom';

function Error() {

    return (
        <div className='container'>
            <h2>404</h2>
            <div>
                <p>oops! Page not found</p>
                <Link to='/'>Back home</Link>
            </div>
        </div>
    );
}

export default Error;
import { Link } from 'react-router-dom';
import Headphone5 from "../../images/headphone5.jpeg";

function Hero() {

    return (
        <div className='hero'>
            <div className="container">
                <div className="hero-content flex">
                    <div className="hero-text">
                        <h2>Home of Affordable Gadgets</h2>
                        <p>Shopping the right gadget for personal or office use can be a huge task, lumili provides an easy options.</p>
                        <Link to='/products' className='btn'>shop now</Link>
                    </div>
                    <div className="hero-img">
                        {/* <img src={Laptop2} alt="Laptop" /> */}
                        <img src={Headphone5} alt="Smart Headphone" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

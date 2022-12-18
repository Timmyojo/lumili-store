import { useState } from 'react';

function Hero() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    return (
        <div className='cta'>
            <div className="container">
                <div className="cta-content flex">
                    <div className="text">
                        <h2>new to lumili?</h2>
                        <p>Subscribe to our newsletter to get updates on our special deals!</p>
                    </div>
                    <form>
                        <input type="text"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email...'
                        />
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className='btn'
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Hero;

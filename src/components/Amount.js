function Amount({ id, number, decrease, increase }) {

    return (
        <div className="cart-number flex">
            <button onClick={() => decrease(id)}>-</button>
            <span>{number}</span>
            <button onClick={() => increase(id)}>+</button>
        </div>
    );
}

export default Amount;
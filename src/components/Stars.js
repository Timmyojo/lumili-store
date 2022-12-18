import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Star = ({ star, review }) => {

    const tempStar = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5
        return (
            <span key={index}>
                {star >= index + 1 ? <BsStarFill /> : star >= number ? <BsStarHalf /> : <BsStar />}
            </span>
        )
    })

    return (
        <div className="star-review">
            {tempStar} <span className='review'>({review} reviews)</span>
        </div>
    )
}

export default Star;
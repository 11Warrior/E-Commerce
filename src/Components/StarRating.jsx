import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const StarRating = ({ ratings }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.round(ratings)) {
            stars.push(<FaStar key={i} />);
        }
        else if (i <= Math.round(ratings - 0.5)){
            stars.push(<FaStarHalfAlt key={i}/>);
        }else {
            stars.push(<FaRegStar key={i} />);
        }
    }

    return (
        <div className='flex items-center gap-1.5'>{stars}</div>
    )
}

export default StarRating
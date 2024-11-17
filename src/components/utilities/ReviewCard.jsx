import React, { useState } from "react";

const ReviewCard = ({ id, author, comment, avatarUrl, jobRole, starRating }) => {
    const getNumberOfStars = (rating) => {
        let starString = [];



        for (let i = 0; i < 5; i++) {
            const filledStar = <i key={i} className="fa-solid fa-star"></i>;
            const emptyStar = <i key={i} className="fa-regular fa-star"></i>;
            if (rating > i) {
                starString.push(filledStar);
            } else {
                starString.push(emptyStar);
            }
        }
        return starString;
    };

    const [starString, setStarString] = useState(getNumberOfStars(starRating));

    return (
        <div className="review-card" key={id}>
            <div className="quotation">
                <img src="public/q-mark.svg" alt="" />
            </div>
            <div className="grades">{starString}</div>

            <div className="review-text">{comment}</div>
            <div className="user-info">
                <div className="user-icon">
                    <img src={avatarUrl} alt="Avatar" />
                </div>
                <div className="user-textinfo">
                    <div className="user-name">
                        <span>{author}</span>
                    </div>
                    <div className="user-title">
                        <span>{jobRole}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ReviewCard;

const ReviewCard = ({author, jobRole, starRating, avatarUrl, comment}) => {
    console.log(avatarUrl);

    return (
        <div className="review-cards">
            <div className="review-card">
                <div className="quotation">
                    <img src="public//q-mark.svg" alt="" />
                </div>

                <div className="grades">
                    <img src="public/star.svg" alt="" />
                    <img src="public/star.svg" alt="" />
                    <img src="public/star.svg" alt="" />
                    <img src="public/star.svg" alt="" />
                    <img src="public/star_null.svg" alt="" />
                </div>

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
        </div>
    );
};
export default ReviewCard;

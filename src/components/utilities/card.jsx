import "./card.css";

const Card = ({title, icon, iconAlt, text}) => {
    return (
        <div className="card">
            <div className="card-icon">
                <img src={icon} alt={iconAlt} />
            </div>
            <div className="card-info">
                <div className="card-headline">{title}</div>
                <div className="card-text">{text}</div>
            </div>
        </div>
    );
};

export default Card;

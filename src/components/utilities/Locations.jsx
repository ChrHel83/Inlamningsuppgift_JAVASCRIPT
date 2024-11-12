import "./locations.css";

const locations = () => {
    return (
        <div className="location-cards">
            <div className="location-card">
                <div className="heading">Medical Center 1</div>
                <div className="info-line">
                    <img src="./public/position-icon.svg" alt="Position" />
                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
                <div className="info-line">
                    <img src="./public/phone-icon.svg" alt="Phone" />
                    <p>(406) 555-0120</p>
                </div>
                <div className="info-line">
                    <img src="./public/clock-icon.svg" alt="Clock" />
                    <div>
                        <p>
                            <b>Mon - Fri:</b> 9:00 am - 22:00 am
                        </p>
                        <p>
                            <b>Sat - Sun:</b> 9:00 am - 20:00 am
                        </p>
                    </div>
                </div>
            </div>

            <div className="location-card">
                <div className="heading">Medical Center 2</div>
                <div className="info-line">
                    <img src="./public/position-icon.svg" alt="Position" />
                    <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                </div>
                <div className="info-line">
                    <img src="./public/phone-icon.svg" alt="Phone" />
                    <p>(406) 544-0123</p>
                </div>
                <div className="info-line">
                    <img src="./public/clock-icon.svg" alt="Clock" />
                    <div>
                        <p>
                            <b>Mon - Fri:</b> 9:00 am - 22:00 am
                        </p>
                        <p>
                            <b>Sat - Sun:</b> 9:00 am - 20:00 am
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default locations;

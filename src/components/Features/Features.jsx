import "./features.css";

const Features = () => {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="content-1">
                    <aside>
                        <h2>Make your money transfer simple and clear</h2>
                        <ul>
                            <li>
                                <p className="txt-m">Banking transactions are free for you</p>
                            </li>
                            <li>
                                <p className="txt-m">No monthly cash commission</p>
                            </li>
                            <li>
                                <p className="txt-m">Manage payments and transactions online</p>
                            </li>
                        </ul>
                        <a href="#" className="btn-primary btn-learn-more">
                            <span>Learn More</span>

                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </aside>
                    <div className="image-1">
                        <img className="chart" src="./public/chart.png" alt="" />
                        <img className="users" src="./public/users.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="content-2">
                    <div className="image-2">
                        <img src="./public/card-over-contacts.png" alt="" />
                    </div>
                    <aside>
                        <h2>Receive payment from international bank details</h2>
                        <div className="cards">
                            <div className="card">
                                <div className="icon">
                                    <img className="icon-img" src="public/icon-credit-card.svg" alt="" />
                                </div>
                                <span>Manage your payments online. Mollis congue egestas egestas fermentum fames.</span>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src="public/icon-cashback.svg" alt="" />
                                </div>
                                <span>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</span>
                            </div>
                        </div>

                        <a href="#" className="btn-primary">
                            <span>Learn More</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Features;

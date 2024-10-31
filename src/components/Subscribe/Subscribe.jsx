import "./subscribe.css";

const Subscribe = () => {
    return (
        <section className="subscribe">
            <div className="container">
                <div className="content">
                    <img src="./public/bell.svg" alt="Bell" />
                    <span className="std-txt">Subscribe to our newsletter</span>
                    <span className="long-txt">Subscribe to our newsletter to stay informed about latest updates</span>

                </div>
                <div className="input-subscribe">
                <i className="fa-regular fa-envelope envelope"></i>
                <input type="email" className="input-email" placeholder="Your email" />
                <div className="btn-subscribe">Subscribe</div>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
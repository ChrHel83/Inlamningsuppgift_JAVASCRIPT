import FaqList from "../utilities/FaqList";
import "./faq.css";

const Faq = () => {
    return (
        <section className="faq">
            <div className="container">
                <div className="banner">
                    <p>Any questions? Check out the FAQs</p>
                    <span>Still have unanswered questions and need to get in touch?</span>
                </div>
                <div className="contact-options">
                    <div className="contact-box phone-contact">
                        <div className="icon-telephone">
                            <img src="public/icon-telephone.svg" alt="Telephone icon" />
                        </div>
                        <p>Still have questions?</p>
                        <a href="#">
                            Contact us <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="contact-box msg-contact">
                        <div className="icon-message">
                            <img src="public/icon-msg.svg" alt="Telephone icon" />
                        </div>
                        <p>Still have questions?</p>
                        <a href="#">
                            Contact us <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <FaqList />
            </div>
        </section>
    );
};

export default Faq;

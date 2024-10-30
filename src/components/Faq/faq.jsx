import { useState, useEffect } from "react";
import FaqListItem from "../utilities/FaqListItem";
import "./faq.css";

const Faq = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch("https://win24-assignment.azurewebsites.net/api/faq")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return setFaqs(data);
            })
            .catch((e) => {
                console.log("Error: " + e);
            });
    }, []);

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
                <div className="faq-list">{faqs.length > 0 ? faqs.map((faq) => <FaqListItem content={faq} key={faq.id} />) : <h1 className="ErrorMSG pt2">Sorry...Couldn't load the FAQ's</h1>}</div>
            </div>
        </section>
    );
};

export default Faq;

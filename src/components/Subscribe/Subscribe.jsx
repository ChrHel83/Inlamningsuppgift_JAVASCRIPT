import React, { useState } from "react";
import "./subscribe.css";
import { useAPI } from "./../../contexts/APIcontext.jsx"; 

const Subscribe = () => {
    const [formInput, setFormInput] = useState({ email: "" });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState('false');

    const {API} = useAPI(); // Hämta URL till API:et genom useContext, början på en fetch-wrapper

    const handleChange = (e) => {
        const { name, value } = e.target;
        document.querySelector(".message-validation").classList.remove("show");
        setFormInput({ ...formInput, [name]: value });
    };

    const handleClick = () => {
        setSubmitted(false);
    };

    const addSubscriber = () => {
        fetch(`${API}subscribe`, {
            method: "post",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formInput),
        }).then((res) => {
            if (res.ok) {
                setSubmitted(true);
                setFormInput({ email: "" });
            }
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = formInput.email.trim(); // Uppercase allowed

        // Regex från stack owerflow
        const mailPattern =
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        setErrors(mailPattern.test(email));

        if (!errors) {
            addSubscriber();
        } else {
            document.querySelector(".message-validation").classList.add("show");
        }
    };

    if (submitted) {
        return (
            <div className="container">
                <div className="subscribe-msg" onClick={handleClick}>
                    <h1>Thanks for subscribing</h1>
                    <h3>Click here to return</h3>
                </div>
            </div>
        );
    }

    return (
        <section className="subscribe">
            <div className="container">
                <div className="content">
                    <img src="./public/bell.svg" alt="Bell" />
                    <span className="std-txt">Subscribe to our newsletter</span>
                    <span className="long-txt">Subscribe to our newsletter to stay informed about latest updates</span>
                </div>

                <form onSubmit={handleSubmit} className="form-subscribe" noValidate>
                    <i className="fa-regular fa-envelope envelope"></i>
                    <input type="email" name="email" className="input-email" onChange={handleChange} required value={formInput.email} placeholder="Your Email" />

                    <button className="btn-subscribe" type="submit">
                        Subscribe
                    </button>

                    <div className="message-validation">The address must be in the format 'x@x.x'<br />Lowercase characters</div>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;

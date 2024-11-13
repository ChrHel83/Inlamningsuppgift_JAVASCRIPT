import React, { useState } from "react";
import "./subscribe.css";

const Subscribe = () => {
    const [formInput, setFormInput] = useState({ email: "" });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validering av formInput innan nästa steg...

        fetch("https://win24-assignment.azurewebsites.net/api/forms/subscribe", {
            method: "post",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formInput),
        })
            .then((res) => {
                if (res.ok) {
                    setSubmitted(true);
                    setFormInput({ email: "" });
                }
            })
            .catch((err) => {
                // console.log(err)
                console.log("Något gick fel");
            });
    };

    if (submitted) {
        return (
            <div className="container">
                <div className="subscribe-msg">
                    <h1>Thank you for subscribing</h1>
                    {/* <button className="message-btn">OK</button> */}
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
                </form>
            </div>
        </section>
    );
};

export default Subscribe;

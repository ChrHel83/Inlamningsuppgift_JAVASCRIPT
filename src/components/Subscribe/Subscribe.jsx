import React, { useState } from "react";
import "./subscribe.css";

const Subscribe = () => {
    const [formInput, setFormInput] = useState({ email: "" });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        document.querySelector('.message-validation').classList.remove('show');
        setFormInput({ ...formInput, [name]: value });
    };

    const handleClick = () => {
        setSubmitted(false);
    };

    const addSubscriber = () => {
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
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = formInput.email.trim();
        // const mailPattern = /^[a-zA-Z0-9_-]+\@[a-zA-Z0-9.-]+\.[a-zA-z]{2, }$/;

       console.log(mailPattern.test(email))
        if(correctChar){
            console.log("Fel texcka");
        }
        let isValid = true;

        

        if(email.length <= 4){
            isValid = false;
        }


        if(!email.includes('@')){
            isValid = false;
        }
        if(email.includes(' ')){
            isValid = false;
        }
        if(!email.includes('.')){
            isValid = false;
        }

        if(isValid){
           addSubscriber();
        }else{
            document.querySelector('.message-validation').classList.add('show');
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
                    
                <div className="message-validation">The address must be in the format 'x@x.x'</div>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;

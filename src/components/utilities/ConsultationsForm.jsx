import React, { useState } from "react";
import "./consultationsform.css";
import { v4 as uuidv4 } from "uuid";

const ConsultationsForm = () => {
    const [formInput, setFormInput] = useState({ fullname: "", email: "", specialist: "" });
    const [errors, setErrors] = useState("false");
    const [submitted, setSubmitted] = useState(false);
    const uuid = uuidv4().toString().substring(1, 8);

    const handleChange = (e) => {
        const { name, value } = e.target;
        name === "email" && checkEmail(value);
        // console.log(e.target.value)
        // document.querySelector(".message-validation").classList.remove("show");
        setFormInput({ ...formInput, [name]: value });
    };

    const checkEmail = (value) => {
      console.log(value)
        const email = value.trim(); // Uppercase allowed

        // Regex från stack owerflow
        const emailPattern =
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        const status = emailPattern.test(email);
        console.log(status);
        // return;
    };

    const handleClick = () => {
        setSubmitted(false);
        setFormInput({ fullname: "", email: "", specialist: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // checkEmail();

        if (!errors) {
            // addSubscriber();
            setSubmitted(true);
        } else {
            // document.querySelector(".message-validation").classList.add("show");
        }
    };

    if (submitted) {
        return (
            <div className="consultation-form">
                <div className="consultation-wrapper" onClick={handleClick}>
                    <h1 className="y-0">Thank you for contacting us!</h1>
                    <h3 className="y-1">We will get back to you as soon as we can.</h3>
                    <h5 className="y-2">Check your inbox for reference-number to your request</h5>
                    <h5 className="y-0">Name: {formInput.fullname}</h5>
                    <h5 className="y-0">Email: {formInput.email}</h5>
                    <h5 className="y-0">Reference.: {uuid}</h5>
                    <h5 className="y-0">Specialist.: {formInput.specialist}</h5>
                    <h6>Click here to close box</h6>
                </div>
            </div>
        );
    }

    return (
        <div className="consultation-form">
            <div className="form-container">
                <div className="form-heading">Get Online Consultation</div>
                <form className="consulation-form" onSubmit={handleSubmit} noValidate>
                    <label htmlFor="fullname" className="form-label">
                        Full Name
                    </label>
                    <input type="text" name="fullname" onChange={handleChange} className="form-input" required value={formInput.fullname} />

                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input type="email" name="email" onChange={handleChange} className="form-input" value={formInput.email} />

                    <label htmlFor="specialist" className="form-label">
                        Specialist
                    </label>
                    <select name="specialist" onChange={handleChange} id="specialist">
                        <option value="none"></option>
                        <option value="Designer">Designer</option>
                        <option value="Developer">Developer</option>
                        <option value="Developer">Technician</option>
                        <option value="Developer">HR</option>
                    </select>

                    <input type="hidden" name="refnum" className="refnum" value={uuid} />

                    <button className="btn-consultation">Make an appointment</button>
                </form>
            </div>
        </div>
    );
};

export default ConsultationsForm;
